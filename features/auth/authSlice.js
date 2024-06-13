import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: {
        email: null,
        localId: null,
        photo: null,
      },
      token: null,
      imageCamera: null,
      location: {
        address: '',
        latitude: 0,
        longitude: 0,
      },
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user.email = action.payload.email
      state.value.user.localId = action.payload.localId
      state.value.token = action.payload.token
    },
    setCameraImage: (state, action) => {
      state.value.imageCamera = action.payload
    },
    setUserPhoto: (state, action) => {
      state.value.user.photo = action.payload
    },
    setUserLocation: (state, action) => {
      state.value.location = action.payload
    },
    logout: state => {
      state.value = {
        user: {
          email: null,
          localId: null,
        },
        token: null,
        imageCamera: null,
        photo: null,
        location: {
          address: '',
          latitude: 0,
          longitude: 0,
        },
      }
    },
  },
})

export const {
  setUser,
  setCameraImage,
  setUserPhoto,
  setUserLocation,
  logout,
} = authSlice.actions

export default authSlice.reducer
