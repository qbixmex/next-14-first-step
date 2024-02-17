# Next First Steps

## Getting Started

**Run development:**

```bash
# NPM
npm run dev

# YARN
yarn dev

# PNPM
pnpm dev

# BUN
bun dev
```

**For building for production:**

```bash
# NPM
npm run build

# YARN
yarn build

# PNPM
pnpm build

# BUN
bun build
```

**After build run production mode (optional):**

```bash
# NPM
npm run start

# YARN
yarn start

# PNPM
pnpm start

# BUN
bun start
```

## NextJs Recommendation

**Edit: ```next.config.mjs```***

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <-- Add this line
};

export default nextConfig;
```

**Create file ```dockerfile``` at root:

```bash
> touch dockerfile
```

**Then paste the following code:**

```docker
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
```

## Create Docker Image

**Note: ```after -t flag, you define the image name.```**

**Note: ```after image name, dot means current file.```**


```bash
> docker build -t next-first-steps .
```

## Mount Docker Image

**Note: ```left port number is our machine and right port is the image port.```**
**Note: ```-d flag means detach mode.```**


```bash
> docker container run -dp 3000:3000 next-first-steps
```