FROM denoland/deno:alpine-1.42.0
WORKDIR /app

COPY . .

ENV NODE_ENV=production

ENTRYPOINT ["deno", "run", "--allow-all", "src/shared/benchFactorial.js"]
