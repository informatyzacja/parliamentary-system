FROM node:18-bullseye as api
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY api/package.json api/
RUN yarn install --immutable
COPY . .
WORKDIR /app/api
RUN yarn build
CMD [ "yarn", "start" ]
