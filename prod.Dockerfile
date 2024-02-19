# Step 1: Build the Next.js application
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the relevant files to the work directory
COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tailwind.config.js .
COPY postcss.config.js .

# Optional: If your build-time environment variables are required, make sure they are passed at build time
ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

ENV NEXT_TELEMETRY_DISABLED 1

# Build the project
RUN npm run build

# Step 2: Serve the static site with Nginx
FROM nginx:alpine AS runner

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/out .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]