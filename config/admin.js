module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "4a1980342c9f1e98ef3f9499c634796a"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "nanana"),
  },
});
