#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/aucar

#navigate into our working directory where we have all our github files
cd /home/ubuntu/aucar/server
npm install

npm run build
sudo systemctl start myapp.service