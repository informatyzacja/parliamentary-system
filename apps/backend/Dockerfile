FROM node:18-bullseye as api
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY api/package.json api/
RUN npm ci
COPY . .
WORKDIR /app/api
RUN npm run build
CMD [ "npm", "start" ]
