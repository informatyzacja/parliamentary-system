FROM node:18-bullseye as Frontend
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
COPY frontend/package.json frontend/
RUN pnpm install
COPY . .
WORKDIR /app/frontend
RUN pnpm build
CMD [ "pnpm", "start" ]
