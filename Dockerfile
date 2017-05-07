FROM node:7
COPY . /usr/src/app
EXPOSE 80

WORKDIR /usr/src/app
RUN ["npm", "install"]
ENTRYPOINT ["node", "app.js"]
