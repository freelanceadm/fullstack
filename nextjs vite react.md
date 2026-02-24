#front/nextjs #front/vite 


# nextjs project create build 

```bash
npx create-next-app@latest my-next-app

npm run dev

npm run build

```
- setup next.config.ts
```typescript
const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // This is the magic line for Docker
};
```
## dockerfile for nextjs

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy standalone build and static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# application ll listen INSIDE container on port 3000
EXPOSE 3000
CMD ["node", "server.js"]

```
- build docker file `frontnextjs`
```bash
# build
docker build -t frontnextjs .

# run here we make a link between
# external port 13000 on HOST and CONTAINER port 3000
docker run -ti -p 13000:3000 myfront
```
# vite project create build

```bash
npm create vite@latest front-vite

npm install

npm run dev

npm run build

# now you have your app in ./dist/ dir
```