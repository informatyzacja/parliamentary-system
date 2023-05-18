FROM node:18-bullseye as Backend
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
COPY backend/package.json backend/
RUN pnpm install
COPY . .
WORKDIR /app/backend
RUN pnpm build
CMD [ "pnpm", "start" ]
