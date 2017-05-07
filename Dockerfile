FROM node:7
COPY . /usr/src/app
EXPOSE 80

CMD cd /usr/src/app && npm install
CMD node /usr/src/app/app.js
