FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_APP_MODE
ENV VITE_APP_MODE=${VITE_APP_MODE}

RUN echo "Building with VITE_APP_MODE=${VITE_APP_MODE}" && npm run build -- --mode ${VITE_APP_MODE}

FROM nginx:stable-alpine as production-stage

ARG VITE_APP_MODE
ENV VITE_APP_MODE=${VITE_APP_MODE}

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY default-${VITE_APP_MODE}.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
