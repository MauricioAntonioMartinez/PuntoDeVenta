FROM node

LABEL author="mcuve"

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4000

VOLUME [ "/app/src/public" ]


# COPY .env.production .env

ENV NODE_ENV=production

USER node


CMD ["npm","run","dev"]



