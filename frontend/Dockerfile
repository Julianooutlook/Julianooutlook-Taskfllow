# Etapa de build (para gerar os arquivos estáticos)
FROM node:18 AS build
WORKDIR /app
COPY . .

# Copia o arquivo .env.production ANTES do build
COPY .env.production .env

RUN npm install
RUN npm run build  # Isso agora gera a pasta /app/dist

# Etapa de produção (para servir os arquivos estáticos com Nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html  
EXPOSE 80
