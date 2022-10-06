import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@rv/types";

const EmptyProductState: Product[] = [
  {
    uuid: "",
    name: "",
    description: "",
    status: "",
    brand: "",
    category: "",
    price: 0,
    wattage: 0,
    images: [],
    slug: "",
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: EmptyProductState,
    loading: false,
  },
  reducers: {
    loadingProducts: (state) => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },
  },
});

export const { loadingProducts, setProducts } = productsSlice.actions;
