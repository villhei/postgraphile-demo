import { GraphQLProvider } from "~/src/graphql";
import { FilmList } from "~/src/filmList";

export default function Main() {
  return (
    <GraphQLProvider>
      <h1>Hello FilmList </h1>
      <FilmList />
    </GraphQLProvider>
  );
}
