import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "@apollo/client/link/context";

//graphQL API endpoint
const http = new HttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = process.env.AUTH_KEY
    ? process.env.AUTH_KEY
    : firebase.config().github.auth_key;
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

const client = new ApolloClient({
  link,
  cache,
});

export default client;
