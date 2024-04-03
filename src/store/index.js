import { configureStore } from "@reduxjs/toolkit";

import userReducer from './slices/userSlice'
import messageReducer from './slices/messagesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  }
})