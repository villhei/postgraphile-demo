import * as Types from "../graphql/types.generated"

import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export type ActorNameFragment = {
  __typename?: "Actor"
  actorId: number
  firstName: string
  lastName: string
}

export type FilmListDescriptionFragment = {
  __typename?: "Film"
  title: string
  filmId: number
  length?: number | null
  description?: string | null
  filmActors: {
    __typename?: "FilmActorsConnection"
    nodes: Array<{
      __typename?: "FilmActor"
      actor?: ({ __typename?: "Actor" } & ActorNameFragment) | null
    }>
  }
}

export type FilmsQueryVariables = Types.Exact<{ [key: string]: never }>

export type FilmsQuery = {
  __typename?: "Query"
  films?: {
    __typename?: "FilmsConnection"
    nodes: Array<{ __typename?: "Film" } & FilmListDescriptionFragment>
  } | null
}

export const ActorNameFragmentDoc = gql`
  fragment ActorName on Actor {
    actorId
    firstName
    lastName
  }
`
export const FilmListDescriptionFragmentDoc = gql`
  fragment FilmListDescription on Film {
    title
    filmId
    length
    description
    filmActors(first: 10) {
      nodes {
        actor {
          ...ActorName
        }
      }
    }
  }
  ${ActorNameFragmentDoc}
`
export const FilmsDocument = gql`
  query Films {
    films(first: 10, orderBy: LENGTH_DESC) {
      nodes {
        ...FilmListDescription
      }
    }
  }
  ${FilmListDescriptionFragmentDoc}
`

/**
 * __useFilmsQuery__
 *
 * To run a query within a React component, call `useFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilmsQuery(
  baseOptions?: Apollo.QueryHookOptions<FilmsQuery, FilmsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FilmsQuery, FilmsQueryVariables>(
    FilmsDocument,
    options
  )
}
export function useFilmsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FilmsQuery, FilmsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FilmsQuery, FilmsQueryVariables>(
    FilmsDocument,
    options
  )
}
export type FilmsQueryHookResult = ReturnType<typeof useFilmsQuery>
export type FilmsLazyQueryHookResult = ReturnType<typeof useFilmsLazyQuery>
export type FilmsQueryResult = Apollo.QueryResult<
  FilmsQuery,
  FilmsQueryVariables
>
