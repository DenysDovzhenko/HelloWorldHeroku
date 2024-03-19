FROM node:21.6.2-1
RUN npm install express
COPY hello.js .
CMD node hello.js
