import React from "react"
import { useFilmsQuery } from "../graphql/types.generated"

export default function Main() {
  const response = useFilmsQuery()

  const films = response.data?.films?.nodes ?? []

  return <pre>{JSON.stringify(films, null, 2)}</pre>
}
