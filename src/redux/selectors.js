export const selectFilter = state => state.filter.value;

export const selectContacts = state => state.contacts.items;

export const selectfilteredContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
}

