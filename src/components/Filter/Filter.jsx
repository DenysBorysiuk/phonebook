import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { Label, Input } from './Filter.styled';
import { BsSearch } from 'react-icons/bs';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      <BsSearch />
      <span>Find contacts by name</span>
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onChangeFilter}
      />
    </Label>
  );
};
