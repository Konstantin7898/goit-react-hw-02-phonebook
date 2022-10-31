import PropTypes from 'prop-types';

export const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filterValue} onChange={onFilterChange} />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
