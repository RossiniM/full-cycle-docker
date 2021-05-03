FROM node:15-alpine

WORKDIR /app

COPY index.js /app
COPY package.json /app

RUN yarn

EXPOSE 3000

ENTRYPOINT ["node","index.js"]