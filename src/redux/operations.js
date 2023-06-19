import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://648ffaf51e6aa71680ca523f.mockapi.io/contacts';

export const getContacts = createAsyncThunk('contacts/fetchAll', 
async () => {
    const response = await axios.get('/contacts')
    return response.data
})

