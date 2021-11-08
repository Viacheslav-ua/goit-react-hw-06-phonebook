import { ADD, REM, FILTER } from "./contacts-actTypes";

type contactsType = {
  id: string;
  name: string;
  number: string;
};

export const addContact = (data: contactsType) => ({
  type: ADD,
  payload: data,
});

export const removeContact = (id: string) => ({
  type: REM,
  payload: id,
});

export const setFilter = (value: string) => ({
  type: FILTER,
  payload: value,
});
