# Copilot instructions

## Commands

- `yarn start` runs the full dev stack in parallel:
  - `yarn start:server` → `ts-node server.ts`
  - `yarn start:client` → `parcel src/index.html`
  - `yarn start:codegen` → `graphql-codegen --watch --config codegen.yml`
- There is no dedicated `build`, `test`, or `lint` script in `package.json` right now.
- Database setup:
  - `docker compose up -d` starts PostgreSQL 16 on `localhost:5555`
  - `scripts/initdb.sh` restores the `dvdrental` dataset into that database

## Architecture

- This is a small PostGraphile + React demo wired around the `dvdrental` PostgreSQL schema.
- `server.ts` starts an Express server with PostGraphile mounted on `/graphql` and GraphiQL enabled.
- The client is a Parcel-built React app in `src/`, rendered from `src/index.tsx` into `src/index.html`.
- Apollo Client is configured once in `src/graphql/ApolloProvider.tsx` and shared through `GraphQLProvider`.
- GraphQL documents live next to their feature code in `src/**/*.graphql`; Codegen writes:
  - `src/graphql/schema.graphql`
  - `src/graphql/types.generated.ts`
  - `src/**/**/*.generated.tsx`
- The app currently shows a film list query in `src/filmList/`, which is the pattern to follow for new UI features.

## Conventions

- Keep generated GraphQL files in sync; do not hand-edit `*.generated.tsx` or `types.generated.ts`.
- Prefer the `~/*` path alias from `tsconfig.json` for repo-root imports.
- Follow the existing 2-space, LF formatting rules from `.editorconfig`.
- Use the existing fragment-first GraphQL style: define fragments near the feature, then compose queries from them.
- Preserve the current runtime defaults unless there is a strong reason to change them:
  - server port `3000`
  - client port `1234`
  - database URL `postgres://dvd:rental@localhost:5555/dvdrental`
- Keep the PostGraphile schema export path at `src/graphql/schema.graphql` so Codegen and the server stay aligned.
