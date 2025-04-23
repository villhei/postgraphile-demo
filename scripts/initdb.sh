#!/bin/bash
set -e
pg_restore -h localhost -U postgres --dbname=dvdrental --verbose scripts/dvdrental/
psql -h localhost -d dvdrental -U postgres < scripts/role.sql
