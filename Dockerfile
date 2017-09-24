FROM 	java:8
RUN		mkdir /app
COPY 	build/libs/Website-0.0.1.jar /app
CMD		["java", "-jar", "/app/Website-0.0.1.jar" ]
