import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <div className={styles.info}>
        <FaUser className={styles.icon} />
        <p>{name}</p>
      </div>
      <div className={styles.info}>
        <FaPhone className={styles.icon} />
        <p>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;