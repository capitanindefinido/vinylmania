import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiKey, authUrl, baseUrl } from '../firebase/database'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
  endpoints: builder => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `v1/accounts:signUp?key=${apiKey}`,
        method: 'POST',
        body: auth,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `v1/accounts:signInWithPassword?key=${apiKey}`,
        method: 'POST',
        body: auth,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation } = authApi
