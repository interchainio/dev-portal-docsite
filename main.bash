#!/usr/bin/bash

# screen -S docs-interchain

npm i

bash sync_ibc.sh
bash sync_cosmos-sdk.sh
# TODO: CometBFT, Wasmd

npm run build

npm run serve -- --host 0.0.0.0 --port 3130


# server {
#     listen 80;
#     server_name docs-interchain.io;
#     location / {
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header Host $http_host;
#         proxy_set_header X-Forwarded-Proto $scheme;
#         proxy_pass http://docs_interchain_io;
#         add_header Referrer-Policy 'origin';\
#         add_header Access-Control-Allow-Origin *;
#         # add_header Access-Control-Allow-Methods *;
#         add_header Access-Control-Max-Age 3600;
#         add_header Access-Control-Expose-Headers Content-Length;
#     }
# }
