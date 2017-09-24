FROM java:8
RUN mkdir /app
COPY build/libs/*.jar /app
EXPOSE 80
CMD ["java", "-jar", "/app/*.jar" ]
