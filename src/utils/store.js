import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./search.Slice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
   app:appSlice,
   search: searchSlice,
   chat:chatSlice,
  }
});

export default store;