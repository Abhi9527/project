FROM node:16
WORKDIR /app
COPY package.json /app
run npm install
COPY . /app
CMD node server.js