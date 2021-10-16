#!/bin/bash
npm install
forever start --minUptime 1000 --spinSleepTime 1000 ./bin/www
exit