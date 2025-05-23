import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (items, name ) => {
  return items.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  })
})