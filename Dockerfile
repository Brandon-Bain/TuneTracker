# Setup Builder
FROM node:18 AS builder
WORKDIR /usr/src/app

# Copy Server Files
COPY tsconfig.json ./
COPY package*.json ./
COPY server ./server

# Copy Client Files
COPY client/public ./client/public
COPY client/src ./client/src
COPY client/package*.json ./client
COPY client/tsconfig.json ./client

# Install Packages and Build
RUN npm run installAll
RUN npm run build-client
RUN npm run build-server


# Setup Runner
FROM node:18 AS runner
WORKDIR /usr/src/app

# Copy compiled resources from builder to runner
COPY --from=builder /usr/src/app/client/build ./client/build
COPY --from=builder /usr/src/app/lib ./lib
COPY --from=builder /usr/src/app/package*.json ./

RUN npm ci --omit=dev

CMD [ "node", "./lib" ]
