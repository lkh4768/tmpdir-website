#!/bin/bash
set -e

# usage: file_env VAR [DEFAULT]
#    ie: file_env 'XYZ_DB_PASSWORD' 'example'
# (will allow for "$XYZ_DB_PASSWORD_FILE" to fill in the value of
#  "$XYZ_DB_PASSWORD" from a file, especially for Docker's secrets feature)
file_env() {
  local var="$1"
  local fileVar="${var}_FILE"
  local def="${2:-}"
  if [ "${!var:-}" ] && [ "${!fileVar:-}" ]; then
    echo >&2 "error: both $var and $fileVar are set (but are exclusive)"
    exit 1
  fi
  local val="$def"
  if [ "${!var:-}" ]; then
    val="${!var}"
  elif [ "${!fileVar:-}" ]; then
    val="$(< "${!fileVar}")"
  fi
  export "$var"="$val"
  unset "$fileVar"
}

# set env
echo "Setting env"
file_env 'PORT'
if [ ! "$PORT" ]
then
	PORT="80"
fi

file_env 'FILE_UPLOAD_SERVICE_URL'
if [ ! "$FILE_UPLOAD_SERVICE_URL" ]
then
	FILE_UPLOAD_SERVICE_URL="http://localhost:6000/"
fi

file_env 'FILE_DOWNLOAD_SERVICE_URL'
if [ ! "$FILE_DOWNLOAD_SERVICE_URL" ]
then
	FILE_DOWNLOAD_SERVICE_URL="http://localhost:6001/"
fi

file_env 'FILE_EXPIRE_TERM_DAY'
if [ ! "$FILE_EXPIRE_TERM_DAY" ]
then
	FILE_DOWNLOAD_SERVICE_URL="1"
fi

file_env 'FILE_MAX_SIZE'
if [ ! "$FILE_MAX_SIZE" ]
then
	FILE_MAX_SIZE="30"
fi

# creat application.properties
echo "Setting application.properties"
echo "  - File upload service url: $FILE_UPLOAD_SERVICE_URL"
echo "  - File download service url: $FILE_DOWNLOAD_SERVICE_URL"
echo "  - File expire term day: $FILE_EXPIRE_TERM_DAY"
echo "  - File max size(mb): $FILE_MAX_SIZE"

rm -f /app/config/application.properties
echo "server.port=$PORT" > /app/config/application.properties
echo "tmpdir.file.upload-service.host=$FILE_UPLOAD_SERVICE_URL" >> /app/config/application.properties
echo "tmpdir.file.download-service.host=$FILE_DOWNLOAD_SERVICE_URL" >> /app/config/application.properties
echo "tmpdir.file.expire-term-day=$FILE_EXPIRE_TERM_DAY" >> /app/config/application.properties
echo "tmpdir.file.max-size-mb=$FILE_MAX_SIZE" >> /app/config/application.properties
echo "spring.http.multipart.max-file-size=\${tmpdir.file-max-size-mb}MB" >> /app/config/application.properties
echo "spring.http.multipart.max-request-size=\${spring.http.multipart.max-file-size}" >> /app/config/application.properties
echo "spring.thymeleaf.mode=HTML5" >> /app/config/application.properties

exec "$@"
