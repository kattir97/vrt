FROM node:22-alpine3.19 AS builder

WORKDIR /app

# Copy the package.json file to my current directory to install the necessary dependence  
COPY package.json package-lock.json ./

# Install the dependence
RUN npm install --loglevel verbose

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html


