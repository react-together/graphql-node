FROM node:alpine AS pnpm

RUN npm install -g pnpm@^10.10.0

FROM pnpm AS deps

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM deps AS builder

COPY . .

RUN pnpm build

RUN rm -rf node_modules
RUN pnpm install --frozen-lockfile --prod

FROM node:alpine

WORKDIR /app  

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./src
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "."]
