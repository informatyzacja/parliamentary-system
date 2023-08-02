FROM node:20-bullseye as Frontend
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY frontend/package.json frontend/
RUN yarn install --immutable
COPY . .
WORKDIR /app/frontend
RUN yarn build
CMD [ "yarn", "start" ]
