import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE } from './apiConfig';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    credentials: 'include'
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    login: builder.mutation({
      query: authInfo => ({
        url: `/method/login`,
        method: 'POST',
        body: authInfo,
      }),
      invalidatesTags: ['Auth']
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/method/logout`,
        method: 'GET',
      }),
      invalidatesTags: ['Auth']
    }),
    me: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const loggedUserResult = await fetchWithBQ({
          url: '/method/frappe.auth.get_logged_user',
          method: 'POST',
          credentials: 'include',
        });
        if (loggedUserResult.error) return { error: loggedUserResult.error }
        const meResult = await fetchWithBQ({
          url: `/resource/User/${loggedUserResult.data.message}`,
          method: 'GET',
          credentials: 'include',
        });
        return meResult.data ? { data: meResult.data.data } : { error: meResult.error };
      },
      providesTags: (result, error, arg) => ['Auth']
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} = authApi;