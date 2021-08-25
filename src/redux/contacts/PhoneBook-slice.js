// import { combineReducers } from "redux";
// import { createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import * as phoneBookActions from "./phoneBook-actions"
import * as phoneBookOperations from "./phoneBook-operations";
// import { fetchContacts, addContact, deleteContact } from "./phoneBook-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: "",
};

const phoneBookSlice = createSlice({
    name: "contacts",
    initialState,
    redusers: {
        [phoneBookActions.changeFilter]: (_, action) => action.payload,
    },
    extraReducers: {
        [phoneBookOperations.fetchContacts.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [phoneBookOperations.fetchContacts.pending](state) {
            state.isLoading = true;
            state.error = null;
        },
        [phoneBookOperations.fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [phoneBookOperations.addContact.fulfilled](state, action) {
            state.items = [...state.items, action.payload];
            state.isLoading = false;
            state.error = null;
        },
        [phoneBookOperations.addContact.pending](state) {
            state.isLoading = true;
            state.error = null;
        },
        [phoneBookOperations.addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [phoneBookOperations.deleteContact.fulfilled](state, action) {
            state.items = state.items.filter((contact) => contact.id !== action.payload)
            state.isLoading = false;
            state.error = null;
        },
        [phoneBookOperations.deleteContact.pending](state) {
            state.isLoading = true;
            state.error = null;
        },
        [phoneBookOperations.deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default phoneBookSlice.reducer;

// const items = createReducer([], {
//     [fetchContacts.fulfilled]: (_, action) => action.payload,
//     [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
//     [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
// });

// const isLoading = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
//     [addContact.pending]: () => true,
//     [addContact.fulfilled]: () => false,
//     [addContact.rejected]: () => false,
//     [deleteContact.pending]: () => true,
//     [deleteContact.fulfilled]: () => false,
//     [deleteContact.rejected]: () => false,

// })

// const error = createReducer(null, {
//     [fetchContacts.pending]: null,
//     [fetchContacts.rejected]: (_, action) => action.payload,
//     [addContact.pending]: null,
//     [addContact.rejected]: (_, action) => action.payload,
//     [deleteContact.pending]: null,
//     [deleteContact.rejected]: (_,action) => action.payload,
// })

// const filter = createReducer("", {
//     [phoneBookActions.changeFilter]: (_, action) => action.payload,
// })

// export default combineReducers({
//     items,
//     isLoading,
//     error,
//     filter,
// })
