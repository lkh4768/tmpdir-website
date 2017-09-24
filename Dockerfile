FROM java:8
RUN	mkdir /app
COPY /build/libs/Website-0.0.1.jar /app
EXPOSE 80
CMD ["java", "-jar", "/app/Website-0.0.1.jar" ]
