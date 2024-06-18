import { combineReducers } from "@reduxjs/toolkit";
import { configureStore as configureStoreRTK } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { wishlistSlice } from "./slices/wishlist-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Persistor,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const storage = createWebStorage("local");
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  })
);

const store = configureStoreRTK({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppPersistor = Persistor;

export const persistor = persistStore(store);

export default store;
