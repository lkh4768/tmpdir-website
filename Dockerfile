FROM java:8
ARG PACKAGE_NAME
ARG PACKAGE_VERSION
ENV PACKAGE_NAME ${PACKAGE_NAME}
ENV PACKAGE_VERSION ${PACKAGE_VERSION}

RUN mkdir -p /app/bin \
	&& mkdir -p /app/config
COPY build/libs/${PACKAGE_NAME}-${PACKAGE_VERSION}.jar /app/bin/
COPY script/docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

VOLUME ["/app/config"]
EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD /usr/bin/java -jar /app/bin/${PACKAGE_NAME}-${PACKAGE_VERSION}.jar --spring.config.location=file:../config/application.properties
