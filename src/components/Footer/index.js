/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FooterBase } from './styles';

import './Footer.css';

function Footer() {
  return (
    <FooterBase>
      <div className="icons">
        <div className="icon">
          <a href="https://github.com/MelloTonio">
            <img className="img" height="40" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="Logo Alura" />
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/MelloTonio">
            <img className="img" height="40" src="https://image.flaticon.com/icons/svg/733/733547.svg" alt="Logo Alura" />
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/MelloTonio">
            <img className="img" height="40" src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Logo Alura" />
          </a>
        </div>
      </div>
      <h4>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/MelloTonio">
          Mello
        </a>
      </h4>
    </FooterBase>
  );
}

export default Footer;
