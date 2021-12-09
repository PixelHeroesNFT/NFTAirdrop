const toQueryString = (queryObject) => {
    return Object.keys(queryObject).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(queryObject[key])).join("&");
}

const request = (url, body, headers, method) => {
    const isValidBody = body && Object.keys(body).length > 0;
    const isValidHeader = headers && Object.keys(headers).length > 0;
    const originalHeaders = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    const options = {
        method: method,
        body: isValidBody ? JSON.stringify(body) : null,
        headers: isValidHeader ? Object.assign(originalHeaders, headers) : originalHeaders,
    };

    return fetch(url, options).then(result => {
        return result.json();
    })
    .catch(e => {
        throw Error(e);
    })
}

export const getFromApi = (url, header) => {
    return request(url, null, header, "GET");
}
export const gettAssetsByTemplate = async (templateId, owner) => {

    try {
        const limit = 1000;
        let assets = [];
        let hasResults = true;
        let page = 1;

        while (hasResults) {
            const queryObject = {
                owner,
                page,
                order: "asc",
                sort: "template_mint",
                template_id: templateId,
                limit,
            };
            const queryString = toQueryString(queryObject);
            const result = await getFromApi(
                `https://proton.api.atomicassets.io/atomicassets/v1/assets?${queryString}`
            );

            if (!result.success) {
                throw new Error(result.message);
            }

            if (result.data.length < limit) {
                hasResults = false;
            }

            assets = assets.concat(result.data);
            page += 1;
        }

        return assets;
    } catch (e) {
        throw new Error(e);
    }
}