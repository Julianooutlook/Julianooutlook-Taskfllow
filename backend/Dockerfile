FROM node:20

WORKDIR /server/app

# COPY package*.json ./
# RUN npm install

COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh


COPY . .

EXPOSE 4000

CMD ["node", "server/app.js"]