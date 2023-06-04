# Declare a Docker build-time variable
ARG NODE_IMAGE_VERSION=18-alpine

### Builder Stage ###

FROM node:${NODE_IMAGE_VERSION} as builder

WORKDIR /usr/src/app
RUN mkdir temp

COPY package*.json ./
RUN ls -al
RUN npm ci

# Copy files from host to container then list it
COPY ./ ./
RUN ls -al

# Build project
RUN npm run build
RUN ls -al

### Final Stage ###

FROM node:${NODE_IMAGE_VERSION} as app

ENV NODE_ENV=production

EXPOSE 8080

WORKDIR /usr/src/app

# Copy the necessary files from the builder stage to this stage
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist
COPY --chown=node:node --from=builder /usr/src/app/temp ./temp
COPY --chown=node:node --from=builder /usr/src/app/package.json .
COPY --chown=node:node --from=builder /usr/src/app/package-lock.json .


# Install production dependencies only
RUN npm ci --production

# List the final directory for reference
RUN ls -al

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

CMD ["node", "./dist/main"]