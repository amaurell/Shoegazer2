/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

import './FormField.css';

const FormField = ({ value, onChange }) => (
  <>
    <div className="division">
      <label className="Text">Band Name</label>
      <input
        className="input"
        onChange={onChange}
        value={value.titulo}
      />

    </div>
    <div className="division">
      <button type="submit" className="Butao">Submit</button>
    </div>
  </>
);

FormField.defaultProps = {
  onChange: () => { },
};

FormField.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};

export default FormField;
