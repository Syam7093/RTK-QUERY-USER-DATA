import { userApi } from "./CrudApi";

export const ordersService = userApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        url: `/signup`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["address"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["address"],
    }),
    tokenverify: builder.mutation({
      query: (user) => ({
        url: `/tockencheck`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["address"],
    }),

    // getAddressByuser: builder.mutation({
    //     query: (id) => ({
    //         url: `/getUserById?userId=${id}`,
    //         method: 'GET'
    //     }),
    //     invalidatesTags: ['address'],
    // }),
    // // https://food-delivery-ekjr.onrender.com/users/getUserById?userId=6656acc3fb0769e9e7cb053f
    // deleteAddress: builder.mutation({
    //     query: ({ id, user }) => ({
    //         url: `/updateAddress?userId=${id}`,
    //         method: 'POST',
    //         body: user
    //     }),
    //     invalidatesTags: ['address'],
    // }),
    // updateAddress: builder.mutation({
    //     query: ({ id, user }) => ({
    //         url: `/updateAddress?addressId=${id}`,
    //         method: 'POST',
    //         body: user
    //     }),
    //     invalidatesTags: ['address'],
    // }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useTokenverifyMutation,
} = ordersService;
