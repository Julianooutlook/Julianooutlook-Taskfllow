
FROM node:20

WORKDIR /app


COPY package*.json ./

COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "server/app.js"]
