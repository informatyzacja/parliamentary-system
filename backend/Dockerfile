FROM node:16-bullseye as Backend
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY backend/package.json backend/
RUN yarn install
COPY . .
WORKDIR /app/backend
RUN yarn build
CMD [ "yarn", "start" ]
