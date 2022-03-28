import React from "react"
import { ApolloProvider } from "~/src/graphql"
import { FilmList } from "~/src/filmList"

export default function Main() {
  return (
    <ApolloProvider>
      <h1>Hello React</h1>
      <FilmList />
    </ApolloProvider>
  )
}
