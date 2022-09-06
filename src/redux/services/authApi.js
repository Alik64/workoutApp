import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080/api/v1/auth";

export const authApi = createApi({
  reducerPath: "auth",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation } = authApi;
