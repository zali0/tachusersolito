import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
// import { InMemoryCache } from '@apollo/client/cache/inmemory/InMemoryCache'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "http://192.168.29.222:4000/graphql",
  cache: new InMemoryCache(),

});


client
  .query({
    query: gql`
    query GetRates {
      ping
    }
  `,
  })
  .then((result) => console.log("ping", result.data.ping))
  .catch((err) => console.log("Ping ", err));

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <Dripsy>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </Dripsy>
    </NavigationProvider>
  )
}
