# postgraphile-demo

## Prequisites
 - Postgres database
 - User `postgres` (unless you edit scripts/initdb.sh) with empty pass
 - Database `dvdrental` created in the postgres using 
    - `createdb dvdrental`
  
## Setup PostgreSQL
```bash
sudo -u postgres createuser <youruser>
sudo -u postgres psql postgres
```

Execute

```sql
CREATE ROLE dvd LOGIN PASSWORD 'rental';
CREATE DATABASE dvdrental WITH OWNER = dvd;
quit
```

Test the connection
```bash
psql -h localhost -d dvdrental -U dvd
```

## Run the demo

1. Clone the repo
2. Init the db by running `scripts/initdb.sh`
2. Run `yarn start`
