FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

COPY .env.local .

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY jsconfig.json .
COPY tailwind.config.js .
COPY postcss.config.js .

ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
CMD npm run dev
