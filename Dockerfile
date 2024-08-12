FROM node:18-alpine

WORKDIR /colombian_api_jhonatan_rodriguez/

COPY public/ /colombian_api_jhonatan_rodriguez/public
COPY src/ /colombian_api_jhonatan_rodriguez/src
COPY package.json /colombian_api_jhonatan_rodriguez/

RUN npm install

CMD ["npm", "start"]