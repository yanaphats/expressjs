#!/bin/bash
npm install
forever start -c “npm run start”
exit