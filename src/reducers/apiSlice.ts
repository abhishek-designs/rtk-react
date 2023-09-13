import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils";
import { FetchUsersType } from "../types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<FetchUsersType, void>({
      query: () => "/customer/fetch-customers",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
