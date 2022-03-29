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
    "postgres://postgres@localhost:5432/dvdrental",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      exportGqlSchemaPath: "src/graphql/schema.graphql",
      setofFunctionsContainNulls: false,
      pgDefaultRole: "default_role",
      simpleCollections: 'omit',
      appendPlugins: [pgSimplifyInflector],
    }
  )
)

app.listen(serverPort)

console.log(`Listening to ${serverPort}`)
