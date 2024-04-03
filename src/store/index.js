import { configureStore } from "@reduxjs/toolkit";

import userReducer from './slices/userSlice'
import messageReducer from './slices/messagesSlice'
import realtimeReducer from './slices/realtimeMessagesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    realtimeMessages: realtimeReducer,
  }
})