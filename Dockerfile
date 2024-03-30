FROM node:alpine
WORKDIR /usr/app
RUN npm install express
COPY hello.js .
ENV PORT=80
EXPOSE 80 443
CMD node hello.js
