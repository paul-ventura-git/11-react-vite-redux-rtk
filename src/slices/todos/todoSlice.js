import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
  name: 'toDoSlice',
  initialState: {
    counter: 10,
    times: 0
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.counter += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = toDoSlice.actions