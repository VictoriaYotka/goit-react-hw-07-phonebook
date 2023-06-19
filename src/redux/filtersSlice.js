import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts({value}, {payload}) {
      value = payload;
    },
  },
})

export const { filterContacts } = filterSlice.actions
export const filterReducer = filterSlice.reducer