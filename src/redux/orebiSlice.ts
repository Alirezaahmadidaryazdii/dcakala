import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrebiState {
  userInfo: any[]; 
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  token: string | null;
}

const initialState: OrebiState = {
  userInfo: [],
  products: [],
  status: 'idle',
  token: null,
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((item) => item._id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
    clearUser: (state) => {
      state.userInfo = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
  clearUser,
} = orebiSlice.actions;

export default orebiSlice.reducer;
