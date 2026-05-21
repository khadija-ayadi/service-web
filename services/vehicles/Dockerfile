FROM node:18-alpine

RUN npm install -g @nestjs/cli

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["node", "dist/main"]
