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
file_env 'ENV_PHASE'
if [ ! "$ENV_PHASE" ] || [ "$ENV_PHASE" == "prd" ]
then
  CONFIG_NAME="production"
elif [ "$ENV_PHASE" == "stage" ]
then
  CONFIG_NAME="stage"
fi

ls -al /config
cat /config/stage.js

echo "Copy $CONFIG_NAME.js"
if [ ! -f /app/build/config/common.js ]; then
	cp -f /config/common.js /app/build/config/common.js
fi
if [ ! -f /app/build/config/$CONFIG_NAME.js ]; then
	cp -f /config/$CONFIG_NAME.js /app/build/config/$CONFIG_NAME.js
fi

echo "NPM Install Production"
cd /app/ && npm install --production

exec "$@"
