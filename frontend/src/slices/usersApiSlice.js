/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    getUsers: build.query({
      query: (params) => {
        const query = new URLSearchParams(params).toString();
        return `${USERS_URL}/all?${query}`;
      },
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ _id }) => ({ type: "User", id: _id })), "User"]
          : ["User"],
    }),
    getUser: build.query({
      query: (_id) => `${USERS_URL}/profile/${_id}`,
      providesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
    logout: build.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: arg._id },
        "User",
      ],
    }),

    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `${USERS_URL}/profile/${id}/edit`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: arg._id },
        "User",
      ],
    }),

    deleteUser: build.mutation({
      query: ({ _id }) => ({
        url: `${USERS_URL}/profile/${_id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: arg._id },
        "User",
      ],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
} = userApiSlice;
