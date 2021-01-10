import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "@apollo/client/link/context";

//graphQL API endpoint
const http = new HttpLink({ uri: "https://api.github.com/graphql" });
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //https://www.apollographql.com/docs/react/networking/authentication/
  const token = "464ad4609efaf82a50ffc996903634b06c0ee2d8";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});
const link = ApolloLink.from([authLink, http]);
const cache = new InMemoryCache();

//"Authorization": "Bearer 464ad4609efaf82a50ffc996903634b06c0ee2d8"

const client = new ApolloClient({
  link,
  cache,
});

export default client;
