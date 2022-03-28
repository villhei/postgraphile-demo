import React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
})

const Provider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Provider
