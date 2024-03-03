FROM node:21-alpine
WORKDIR /app

COPY . .

ENV NODE_ENV=production

ENTRYPOINT ["node", "bench.js"]
