import { api } from "../api";

export const menuApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => "/menus",
    }),
    createMenu: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetMenusQuery } = menuApi;
