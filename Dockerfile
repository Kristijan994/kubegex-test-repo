FROM node:16.13.1 

WORKDIR /app

COPY package*.json /app/

RUN npm install -g serve && npm install

COPY ./ /app/
COPY .env /app/

ARG FRONTEND_ENV=production

RUN npm run build

ENV PORT=${PORT:-8080}
EXPOSE 8080

CMD ["npm", "start"]