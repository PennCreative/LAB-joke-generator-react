import React from 'react';
import PropTypes from 'prop-types';

export default function Riddle({ text }) {
  return (
    <>
      <h3> </h3>
      <p>{text === ''}</p>
    </>
  );
}

Riddle.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  text: PropTypes.string.isRequired,
};
