import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080/api/v1/workouts";

const createRequest = (url) => ({ url });

export const workoutsApi = createApi({
  reducerPath: "workouts",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllWorkouts: builder.query({
      query: () => createRequest("/"),
    }),
    getRandomWorkout: builder.query({
      query: () => createRequest("/random"),
    }),
  }),
});

export const { useGetAllWorkoutsQuery, useGetRandomWorkoutQuery } = workoutsApi;
