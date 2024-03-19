FROM node:latest
WORKDIR /usr/app
RUN npm install express
COPY hello.js .
CMD node hello.js
