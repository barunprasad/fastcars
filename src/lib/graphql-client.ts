import { GraphQLClient } from "graphql-request";

const endpoint = `${process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URL}`;

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
  credentials: "omit", // Prevent sending cookies
  mode: "cors",
});
