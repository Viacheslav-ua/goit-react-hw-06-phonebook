type contactsType = {
  id: string;
  name: string;
  number: string;
};

export const addContact = (data: contactsType) => ({
  type: "contacts/Add",
  payload: data
})

export const removeContact = (id: string) => ({
  type: "contacts/Remove",
  payload: id
})