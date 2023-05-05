import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://one.example.com' }),
  endpoints: builder => ({
    login: builder.query({
      
    })
  }),
});