import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact({items}, {payload}) {
            items.push({
                ...payload,
                id: nanoid(),
            })
        },

       removeContact({items}, action) {
            return items.filter(contact => contact.id !== action.payload)
        }
    },
  })
  
  export const { addContact, removeContact, } = contactsSlice.actions
  export const contactsReducer = contactsSlice.reducer