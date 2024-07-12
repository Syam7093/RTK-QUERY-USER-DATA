import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8765/main` }),
  tagTypes: ["address"],
  endpoints: () => ({}),
});
