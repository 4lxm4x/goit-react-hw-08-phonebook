import { useDispatch } from 'react-redux';
import './Filter.css';
import { filter } from '../../redux/slices/filterSlice';
// import { filterContacts } from '../../redux/actions/filterContacts';

const Filter = () => {
  const dispatch = useDispatch();

  const onInput = e => {
    dispatch(filter(e.target.value.toLowerCase()));
  };
  return (
    <input
      type="text"
      className="filter"
      placeholder="Search contact"
      name="filter"
      onChange={onInput}
    />
  );
};

export default Filter;
