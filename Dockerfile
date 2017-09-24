FROM java:8
RUN mkdir /app
COPY build/libs/Website-*.jar /app
EXPOSE 80
CMD ["java", "-jar", "/app/Website-*.jar" ]
