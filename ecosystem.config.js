module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: './apps/backend',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'frontend',
      cwd: './apps/frontend',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
