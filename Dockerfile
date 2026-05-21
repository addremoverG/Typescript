FROM node:22-alpine

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN cp -r src/public dist/public

EXPOSE 3000
CMD ["npm", "start"]