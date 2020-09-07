import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: rgb(0, 26, 26);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;
