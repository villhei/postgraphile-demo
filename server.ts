import express from "express"
import cors from "cors"

import { postgraphile } from "postgraphile"
import pgSimplifyInflector from "@graphile-contrib/pg-simplify-inflector"

const serverPort = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(
  postgraphile(
    process.env.DATABASE_URL ||
    "postgres://dvd:rental@localhost:5432/dvdrental",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      exportGqlSchemaPath: "src/graphql/schema.graphql",
      setofFunctionsContainNulls: false,
      pgDefaultRole: "default_role",
      ownerConnectionString: 'postgres://postgres@localhost:5432/dvdrental',
      simpleCollections: 'omit',
      appendPlugins: [pgSimplifyInflector],
    }
  )
)

app.listen(serverPort)

console.log(`PostGraphile listening to\thttp://localhost:${serverPort}`)
console.log(`GraphiQL served at\t\thttp://localhost:${serverPort}/graphiql`)
console.log(`Web client served at\t\thttp://localhost:1234`)
