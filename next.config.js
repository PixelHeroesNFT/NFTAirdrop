module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "http://localhost:8080/api/:slug*",
      },
    ];
  },
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    HYPERION_ENDPOINT: process.env.HYPERION_ENDPOINT,
  },
  target: "serverless"
};
