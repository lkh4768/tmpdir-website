FROM java:8
ARG PACKAGE_NAME
ARG PACKAGE_VERSION
ENV PACKAGE_NAME ${PACKAGE_NAME}
ENV PACKAGE_VERSION ${PACKAGE_VERSION}

RUN mkdir -p /app/bin \
	&& mkdir -p /app/config
COPY src/main/resources/application.properties /app/config/
COPY build/libs/${PACKAGE_NAME}-${PACKAGE_VERSION}.jar /app/bin/

VOLUME ["/app/config"]
EXPOSE 80
CMD /usr/bin/java -jar /app/bin/${PACKAGE_NAME}-${PACKAGE_VERSION}.jar
