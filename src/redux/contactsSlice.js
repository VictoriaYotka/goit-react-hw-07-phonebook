import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { addContact, getContacts } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    // reducers: {
    //     addContact(state, {payload}) {
    //         return {...state, items: [...state.items,  {
    //                 ...payload,
    //                 id: nanoid(),
    //             }]}
    //         // items.push({
    //         //     ...payload,
    //         //     id: nanoid(),
    //         // })
    //     },

    //    removeContact(state, {payload}) {
    //     return {...state, items: state.items.filter(contact => contact.id !== payload)
    //     }}
    //         // return items.filter(contact => contact.id !== payload)
    //     },
    extraReducers: {
        [getContacts.fulfilled] (state, {payload}) {
            state.items = payload
        },
        [addContact.fulfilled] ({items}, {payload}) {
            items.push(payload)
        }
    }
    })
  
//   export const { addContact, removeContact, } = contactsSlice.actions
  export const contactsReducer = contactsSlice.reducer