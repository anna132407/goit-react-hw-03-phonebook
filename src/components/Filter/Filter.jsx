import PropTypes from 'prop-types';
import { SearchInput, SearchLabel } from './Filter.styled';

export const Filter = ({ onFilterChange, valueToFilter }) => {
  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput
        type="text"
        name="name"
        value={valueToFilter}
        required
        onChange={onFilterChange}
      />
    </SearchLabel>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  valueToFilter: PropTypes.string.isRequired,
};