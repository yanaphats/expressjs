#!/bin/bash
npm install
npm install -g forever
forever start -c “npm run start”
exit