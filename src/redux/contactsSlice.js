import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
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
        },
        [deleteContact.fulfilled] (state, {payload}) {
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
                console.log(payload.id)
              state.items.splice(index, 1);
        }
    }
    })
  
  export const contactsReducer = contactsSlice.reducer