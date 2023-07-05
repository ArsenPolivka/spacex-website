import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://spacex-production.up.railway.app/',
	cache: new InMemoryCache(),
});

export const ROCKETS_QUERY = gql`
  query GetRockets {
    rockets {
      id
      description
      name
    }
  }
`;

export default client;
