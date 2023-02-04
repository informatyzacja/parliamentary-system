module.exports = {
  apps: [
    {
      name: "backend",
      script: "yarn",
      args: "--cwd backend start",
    },
    {
      name: "frontend",
      script: "yarn",
      args: "--cwd frontend start",
    },
  ],
};
