import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const initialState = {
  messages: [],
};

export const getMessages = createAsyncThunk("messages/getMessages", async () => {
  const querySnapshot = await getDocs(collection(db, "messages"));
  const snapshotArray = []

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    snapshotArray.push(doc.data())
  });

  return snapshotArray
});

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    refreshMessages : (state, action) => {
      state.messages = action.payload
    }
  },
  
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload
    })
  }
});

export default messagesSlice.reducer
export const {refreshMessages} = messagesSlice.actions;

