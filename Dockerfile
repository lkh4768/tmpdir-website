FROM node:10.10.0

COPY package.json /package.json
COPY build/config /build/config
COPY build/* /build/*
COPY script/docker/docker-entrypoint.sh /docker-entrypoint.sh
RUN mkdir -p /app/build /applog /storage \
	&& mv -rf /build /app/ \
  && mv /package.json /app/ \
  && chmod +x /docker-entrypoint.sh

VOLUME ["/app/build/config", "/applog", "/storage"]
EXPOSE 443

ENTRYPOINT ["/docker-entrypoint.sh"]

WORKDIR /app/
CMD npm run start:$ENV_PHASE
