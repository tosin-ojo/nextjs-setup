import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WaitListInput, Message } from "./models/waitList.model";
import { WAIT_LIST } from "../store/actionTypes";
import { baseUrl } from "../utils/baseUrl";

export const waitList = createApi({
  reducerPath: WAIT_LIST,
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl()}/api`,
  }),
  endpoints: (builder) => ({
    submitWaitList: builder.mutation<Message, WaitListInput>({
      query: (credentials) => ({
        url: `/waitList`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSubmitWaitList } = waitList;
