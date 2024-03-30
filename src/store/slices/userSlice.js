import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // email: null,
  // token: null,
  email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null
}


const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
   
    },

    removeUser: (state) => {
      state.email = null
      state.token = null
      localStorage.removeItem('email')
      localStorage.removeItem('token')

    }
  }
})


export default userSlice.reducer
export const {setUser, removeUser} = userSlice.actions