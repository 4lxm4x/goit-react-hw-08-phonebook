import { useDispatch } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import './Filter.css';
import { filter } from '../../redux/slices/filterSlice';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
// import { filterContacts } from '../../redux/actions/filterContacts';

const Filter = ({ prop }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  console.log('🚀 ~ Filter ~ visible:', visible);

  prop(visible);

  // function setVisible(visible) {
  //   console.log('🚀 ~ setVisible ~ prop:', visible);

  //   // prop(visible);
  // }

  const onInput = e => {
    dispatch(filter(e.target.value.toLowerCase()));
  };
  return (
    <>
      {/* <input
        type="text"
        visible={prop}
        className="filter"
        placeholder="Search contact name"
        name="filter"
        onChange={onInput}
      /> */}

      <FormControl variant="outlined">
        <Input
          type="text"
          autoFocus
          className="filter"
          name="filter"
          variant="standard"
          placeholder="Search contact name"
          // inputProps={ariaLabel}
          onChange={onInput}
          onBlur={() => {
            setVisible(false);
          }}
          onFocus={() => {
            setVisible(true);
          }}
        />
      </FormControl>
    </>
  );
};

export default Filter;
