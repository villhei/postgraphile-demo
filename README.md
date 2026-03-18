# postgraphile-demo

## Prerequisites

- Docker (for running the database via Docker Compose)
- `pg_restore` (part of the PostgreSQL client tools)
- Node.js / Yarn

## Setup

1. **Start the database**

   ```bash
   docker compose up -d
   ```

   This starts a PostgreSQL 16 container (`dvd-db`) on port `5555` with user `dvd`, password `rental`, and database `dvdrental`.

2. **Load the data**

   ```bash
   scripts/initdb.sh
   ```

   This restores the `dvdrental` dataset into the running database.

3. **Start the server**

   ```bash
   yarn start
   ```
