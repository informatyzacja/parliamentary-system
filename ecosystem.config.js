module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "backend/",
      script: "node_modules/.bin/strapi",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "frontend",
      cwd: "frontend/",
      script: "node_modules/.bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
