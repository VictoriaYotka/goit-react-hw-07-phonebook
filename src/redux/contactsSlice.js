import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    extraReducers: (builder) => {
        builder
      .addCase(fetchContacts.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload
        })
        .addCase(addContact.fulfilled, (state, {payload}) => {
            Notify.success(`${payload.name} successfully added!`)
            state.isLoading = false;
            state.error = null;
            state.items.push(payload)
        })
        .addCase(deleteContact.fulfilled, (state, {payload}) => {
            Notify.success(`${payload.name} successfully deleted!`)
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1);
        })
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
            state.error = null
        })
        // .addCase(addContact.pending, (state) => loading(state))
        // .addCase(deleteContact.pending, (state) => loading(state))
        .addCase(fetchContacts.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(addContact.rejected, (state, {payload}) => {
            Notify.failure(`${payload}, not added. Try again`)
        })
        .addCase(deleteContact.rejected, (state, {payload}) => {
            Notify.failure(`${payload}, not deleted. Try again`)
        })
    }})
  
  export const contactsReducer = contactsSlice.reducer