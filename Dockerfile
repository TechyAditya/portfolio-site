# Use Node base image with pnpm
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate
WORKDIR /app

# Install only production deps
FROM base AS production
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Build the app
FROM base AS build
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Final stage
FROM base AS runtime
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY --from=production /app/node_modules ./node_modules
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["pnpm", "start"]
