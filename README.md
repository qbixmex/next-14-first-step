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

## Create Docker Image

**```Note: after -t flag, you define the image name.```**

**```Note: after image name, dot means current file.```**


```bash
> docker build -t next-first-steps .
```

## Mount Docker Image

**```Note: left port number is our machine and right port is the image port.```**


```bash
> docker container run -p 3000:3000 next-first-steps
```
