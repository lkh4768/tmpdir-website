FROM java:8
RUN mkdir /app
ADD build/libs/Website-*.jar /app
EXPOSE 80
CMD ["java", "-jar", "/app/Website-*.jar" ]
