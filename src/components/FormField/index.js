/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

import './FormField.css';

const FormField = ({ value, onChange }) => {
  const [password, setPassword] = React.useState(null);

  const [buttonValue, setButtonValue] = React.useState(value.titulo);

  return (
    <>
      <div className="division">
        <label className="Text">Band Name</label>
        <input
          className="input"
          onChange={onChange}
          value={buttonValue}
        />

      </div>
      <div className="division">
        {password !== 'mellome' ? (
          <>
            <p>        Digite a senha</p>
            <input onChange={(e) => setPassword(e.target.value)} className="input" />
            {' '}
          </>
        ) : (<button type="submit" className="Butao" onClick={() => setButtonValue('')}>Submit</button>)}
      </div>
    </>
  );
};

FormField.defaultProps = {
  onChange: () => { },
};

FormField.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};

export default FormField;
