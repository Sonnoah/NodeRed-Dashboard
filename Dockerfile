FROM nodered/node-red:latest

RUN npm install --unsafe-perm \
    node-red-dashboard \
    node-red-contrib-mongodb3 \
    node-red-node-ui-table \
    node-red-contrib-web-worldmap

COPY settings.js /data/
COPY flows.json  /data/
