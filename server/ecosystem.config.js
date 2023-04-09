module.exports = {
  apps: [
    {
      name: "app1",
      script: "./app.js",
      env: {
        NODE_ENV: "production",
        SECRET: "rahasia",
        DATABASE_URL:
          "postgresql://postgres:hacktiv8123@db.ngxoojpqagizqurjdqge.supabase.co:5432/postgres",
        PORT: 80,
      },
    },
  ],
};
