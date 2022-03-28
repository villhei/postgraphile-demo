#!/bin/bash
pg_restore --dbname=dvdrental --verbose scripts/dvdrental/
psql -U postgres dvdrental < scripts/role.sql
