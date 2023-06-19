import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://648ffaf51e6aa71680ca523f.mockapi.io/contacts';

export const getContacts = createAsyncThunk('contacts/fetchAll', 
async(_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
})

export const addContact = createAsyncThunk('contacts/addContact', 
async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { ...contact });
      alert(`${contact.name} successfully added!`)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

// export const deleteContact = createAsyncThunk('contacts/deleteContact', 
// async () => await axios.delete('/contacts'))