import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./redux/actions";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import S from "./App.module.css";


type contactsType = {
  id: string;
  name: string;
  number: string;
};

interface PropsTypes {
  items: contactsType[];
  filter: string;
}

const App: React.FC = () => {
  // const stateLoad: contactsType[] = JSON.parse(
  //   window.localStorage.getItem("contacts") ??
  //     '[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]'
  // );

  // const [contacts, setContacts] = useState<contactsType[]>(stateLoad);
  // const [filter, setFilter] = useState<string>("");

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const findName = (str: string): boolean => {
    // return false
    // return contacts.find((item) =>
    //   item.name.toLowerCase().includes(str.toLowerCase())
    // )
    //   ? true
    //   : false;
  // };

  // const formSubmitHandler = (data: contactsType) => {
  //   setContacts((state) => [...state, data]);
  // };

  // const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const deleteContact = (id: string): void => {
    // setContacts((state) => state.filter((item) => item.id !== id));
    // removeContact(id)
  // };

  return (
    <div className={S.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={S.title}>Contacts</h2>
      {/* <Filter filterValue={filter} handleChangeFilter={changeFilter} /> */}
      {/* <ContactList
        list={contacts.items}
        filterValue={contacts.filter}
        deleteContact={onDeleteContact}
      /> */}
      <ContactList />
      
    </div>
  );
};

// const mapStateToProps = (state: any) => {
//   return {
//     contacts: state.contacts,
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     onDeleteContact: (id: string) => dispatch(actions.removeContact(id)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;