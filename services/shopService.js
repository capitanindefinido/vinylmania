import { baseUrl } from '../firebase/database'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { objectToArray } from '../utils/array'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getProductsByCategory: builder.query({
      query: brand => `products.json?orderBy="brand"&equalTo="${brand}"`,
      transformResponse: response => objectToArray(response),
    }),
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    postOrder: builder.mutation({
      query: order => ({
        url: 'orders.json',
        method: 'POST',
        body: order,
      }),
    }),
    getProfileImage: builder.query({
      query: localId => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body: { image },
      }),
    }),
    getUserLocation: builder.query({
      query: localId => `locations/${localId}.json`,
    }),
    postUserLocation: builder.mutation({
      query: ({ location, localId }) => ({
        url: `locations/${localId}.json`,
        method: 'PUT',
        body: { ...location },
      }),
    }),
  }),
})

export const {
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  usePostOrderMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetUserLocationQuery,
  usePostUserLocationMutation,
} = shopApi
