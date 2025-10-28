import {
  createClient,
  cacheExchange,
  fetchExchange,
} from '@urql/core';

export const graphqlClient = createClient({
  url: `${import.meta.env.VITE_SUPABASE_URL}/graphql/v1`,
  fetchOptions: () => ({
    headers: {
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },
  }),
  exchanges: [cacheExchange, fetchExchange],
});
