import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080/api/v1/auth";

const createRequest = (url) => ({ url });

export const workoutsApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    register: builder.query({
      query: () => createRequest("/register"),
    }),
    register: builder.query({
      query: () => createRequest("/me"),
    }),
  }),
});

export const { useGetAllWorkoutsQuery, useGetRandomWorkoutQuery } = workoutsApi;
