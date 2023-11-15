module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "prozak"),
      user: env("DATABASE_USERNAME", "prozak"),
      password: env("DATABASE_PASSWORD", "prozak308"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    acquireConnectionTimeout: 5000,
    pool: {
      min: 0,
      max: 10,
      createTimeoutMillis: 8000,
      acquireTimeoutMillis: 8000,
      idleTimeoutMillis: 8000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
    },
  },
});
