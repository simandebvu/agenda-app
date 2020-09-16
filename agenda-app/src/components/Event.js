import PropTypes from 'prop-types';
Event.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.string,
  description: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

Event.defaultProps = {
  location: null,
  description: null,
};
