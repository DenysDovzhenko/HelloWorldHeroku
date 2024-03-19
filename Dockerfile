FROM node:alpine
RUN npm install express
COPY hello.js .
CMD node hello.js
