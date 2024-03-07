import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFilter,
  selectFilter,
  selectContacts,
} from '../../redux/contactsSlice';
import { isWhitespacesOrEmpty } from '../../helpers/helpers';
import css from './Filter.module.css';

function Filter() {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const isDisabled = contacts.length < 2 && isWhitespacesOrEmpty(filter);

  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          className={css.filterInput}
          value={filter}
          onChange={e => dispatch(updateFilter(e.target.value))}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
}

export default Filter;
