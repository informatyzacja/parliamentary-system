module.exports = {
  apps: [
    {
      name: "backend",
      script: "yarn",
      args: "--cwd backend start",
      interpreter: "bash",
    },
    {
      name: "frontend",
      script: "yarn",
      args: "--cwd frontend start",
      interpreter: "bash",
    },
  ],
};
