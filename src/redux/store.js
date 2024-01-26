import { configureStore } from "@reduxjs/toolkit";

import cartReduser from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReduser,
  },
});
