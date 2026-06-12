# --- Base image ---
FROM node:22-bookworm-slim AS base
RUN corepack enable
WORKDIR /app

# --- Dependencies stage ---
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

# --- Build stage ---
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# --- Runtime stage ---
FROM node:22-bookworm-slim AS runner
RUN corepack enable

ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Para poder ejecutar "pnpm preview" necesitas deps (vite) en runtime:
# (Si quieres evitar esto, usa la opción Nginx)
RUN pnpm install --frozen-lockfile

EXPOSE 8080
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "3000"]
