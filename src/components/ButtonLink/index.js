import React from 'react';

import './ButtonLink.css';

const ButtonLink = (props) => {
  return (
    <a className={props.className} onClick={props.onclick}>
      {props.text}
    </a>
  );
};

export default ButtonLink;
