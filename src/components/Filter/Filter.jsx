import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, selectFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          className={css.filterInput}
          value={filter}
          onChange={e => dispatch(updateFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
