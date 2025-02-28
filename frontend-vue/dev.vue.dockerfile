FROM node:16-alpine as build-stage

WORKDIR /app

COPY ./frontend-vue/package*.json ./frontend-vue/yarn.lock ./

RUN yarn install

COPY frontend-vue/ .
# COPY /frontend-vue/dist ./
EXPOSE 8085
CMD ["yarn","serve"]

# RUN yarn build

# production stage
# FROM nginx:stable-alpine AS production-stage
# # RUN rm -rf /usr/share/nginx/html
# # COPY --from=build-stage /usr/bin/yarn /usr/bin/yarn

# COPY --from=build-stage /frontend-vue/dist /usr/share/nginx/html

# COPY ./frontend-vue/nginx/default.conf /etc/nginx/conf.d/default.conf 
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]