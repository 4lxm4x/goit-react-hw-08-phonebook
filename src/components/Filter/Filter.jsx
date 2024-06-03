import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './Filter.css';
import { filter } from '../../redux/slices/filterSlice';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';

const Filter = ({ prop }) => {
  const dispatch = useDispatch();
  const filterInput = useSelector(state => state.filter);
  console.log('🚀 ~ Filter ~ filterInput:', filterInput);
  const [visible, setVisible] = useState(true);

  console.log('🚀 ~ Filter ~ visible:', visible);

  prop(visible);

  const onInput = e => {
    dispatch(filter(e.target.value.toLowerCase()));
  };

  return (
    <>
      <FormControl variant="outlined">
        <Input
          type="text"
          autoFocus
          className="filter"
          name="filter"
          variant="standard"
          placeholder="Search contact name"
          onChange={onInput}
          onBlur={() => {
            setVisible(false);
          }}
          onFocus={e => {
            e.target.value = filterInput;
            setVisible(true);
          }}
        ></Input>
      </FormControl>
    </>
  );
};

export default Filter;
