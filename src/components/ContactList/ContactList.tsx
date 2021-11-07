import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import S from "./ContactList.module.css";
type listType = {
  id: string;
  name: string;
  number: string;
};

interface PropsType {
  list: listType[];
  filterValue: string;
  deleteContact: any;
}

const ContactList: React.FC<any> = ({
  // list,
  // filterValue,
  // deleteContact,
  contacts,
  onDeleteContact,
}) => {
  return (
    <ul className={S.list}>
      {contacts.items.map(
        ({ id, name, number }: any) =>
          name.toLowerCase().includes(contacts.filter.toLowerCase()) && (
            <li key={id} className={S.row}>
              <p className={S.text}>
                {name}: {number}
              </p>
              <button className={S.btn} onClick={() => onDeleteContact(id)}>
                Удалить
              </button>
            </li>
          )
      )}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onDeleteContact: (id: string) => dispatch(actions.removeContact(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// export default ContactList;
