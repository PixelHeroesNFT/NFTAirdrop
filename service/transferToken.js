import { Api, JsonRpc, JsSignatureProvider } from "@proton/js";
import { LinkSession, Link } from "@proton/link";
import { TextEncoder, TextDecoder } from "web-encoding";
class ProtonSDK {
  constructor() {
    this.chainId =
      "384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0";
    this.endpoints = ["https://proton.greymass.com"]; // Multiple for fault tolerance
    this.appName = "";
    this.requestAccount = ""; // optional
    this.session = LinkSession || null;
    this.link = Link || null;
  }

  dropnfts = async (tokenContract, to, assetId, memo, from) => {
    console.log( tokenContract, to, assetId, memo, from )
    const defaultPrivateKey = process.env.PRIVATE_KEY;
    const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
    const rpc = new JsonRpc(["https://proton.greymass.com"], { fetch });
    const api = new Api({
      rpc,
      signatureProvider,
      TextEncoder,
      TextDecoder,
    });
    const action = [
      {
        account: tokenContract,
        name: "transfer",
        data: {
          to,
          asset_ids: [assetId],
          memo,
          from,
        },
        authorization: [{ actor: from, permission: "active" }],
      },
    ];
    const result = await api.transact(
      { actions: action },
      {
        blocksBehind: 3,
        expireSeconds: 30,
      }
    );
    return result;
  };
}

export default new ProtonSDK();
