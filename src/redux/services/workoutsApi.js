import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "http://localhost:8080/api/v1";
const baseUrl = "https://triple-triad-game.herokuapp.com/api/v1/characters";

const createRequest = (url) => ({ url });

export const workoutsApi = createApi({
  reducerPath: "workouts",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllWorkouts: builder.query({
      query: () => createRequest("/"),
    }),
  }),
});

export const { useGetAllWorkoutsQuery } = workoutsApi;
