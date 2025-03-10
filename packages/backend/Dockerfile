FROM node:22-alpine
WORKDIR /usr/app

COPY . .
RUN npm i -g pnpm
RUN pnpm i

RUN pnpm run build

CMD ["pnpm", "start"]
