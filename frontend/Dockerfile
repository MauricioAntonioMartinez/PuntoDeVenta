FROM node:14

LABEL author="mcuve"

WORKDIR /web

COPY package.json .

RUN npm i

COPY . .

USER node

EXPOSE 3000


CMD ["npm","run","dev"]
