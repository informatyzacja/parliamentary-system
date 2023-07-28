module.exports = {
  apps: [
    {
      name: 'api',
      cwd: './apps/api',
      script: 'yarn',
      args: 'start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'web',
      cwd: './apps/web',
      script: 'yarn',
      args: 'start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
