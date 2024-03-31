FROM chainguard/bun
WORKDIR /app

COPY . .

ENV NODE_ENV=production

ENTRYPOINT ["bun", "src/bench.js"]
