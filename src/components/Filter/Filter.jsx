import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filterSlice.js';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <h5 style={{ marginBottom: '10px' }}>Find contacts by name</h5>
      <FormControl
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onChangeFilter}
      />
    </div>
  );
};
