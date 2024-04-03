import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  realtimeMessages: []
}

const realtimeMessagesSlice = createSlice({

  name: 'realtimeMessages',

  initialState,

  reducers: {
    refreshArray: (state, action) => {
     state.realtimeMessages.push(action.payload)
    }
  }
})


export default realtimeMessagesSlice.reducer
export const {refreshArray} = realtimeMessagesSlice.actions