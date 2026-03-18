#!/bin/bash
set -e
pg_restore -h localhost -p 5555 -U dvd --dbname=dvdrental --verbose scripts/dvdrental/
