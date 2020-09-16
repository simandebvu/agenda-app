import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBIcon, MDBBadge,
} from 'mdbreact';

export const Event = props => {
  const {
    id, title, time, location, description, onDelete,
  } = props;
  return (
    <>
      <div className="media mt-1">
        <h3 className="h3-responsive font-weight-bold mr-3">
          {time}
        </h3>
        <div className="media-body mb-3 mb-lg-3">
          <MDBBadge color="danger" className="ml-2 float-right" onClick={() => onDelete(id)}>
            DELETE
          </MDBBadge>
          <h6 className="mt-0 font-weight-bold">
            {title}
            {' '}
          </h6>
          {' '}
          <hr className="hr-bold my-2" />
          {location && (
          <>
            <p className="font-smaller mb-0">
              <MDBIcon icon="location-arrow" />
              {' '}
              {location}
            </p>
          </>
          )}
        </div>
      </div>
      {description && (
      <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
        {description}
      </p>
      )}
    </>
  );
};

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

export default Event;
