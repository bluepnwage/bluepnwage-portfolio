# Stage 0: Base image with Node and pnpm
FROM node:20-alpine AS base

# Enable corepack and pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Stage 1: Install dependencies
FROM base AS deps

# Copy only package files to install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Stage 2: Build the application
FROM base AS builder

WORKDIR /app

# Copy installed deps
COPY --from=deps /app/node_modules ./node_modules

# Copy rest of the application
COPY . .

# Build the Next.js app
RUN pnpm build

# Stage 3: Production image
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy required files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# If your app uses a custom server, include it here (e.g., server.js or server.ts)
# Otherwise, just use `next start` (if you're using Next.js built-in server)

EXPOSE 3000

CMD ["node", "server.js"]
# OR if you're using Next.js standalone output:
# CMD ["node", "server.js"]
