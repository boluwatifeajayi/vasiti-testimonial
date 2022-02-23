import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: arial, sans-serif;
    height: 100vh;
    scroll-behavior: smooth;
    color: #333;
  }
  
  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .share {
    position: relative;
    line-height: 32px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .share::after {
    content: url('./images/link-line.svg');
    position: absolute;
    top: 15px;
    left: -10px;
    display: block;
  }

`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

export const Button = styled.button`
  background: ${props => (props.vendor ? '#F0FFEE' : '#EEF8FF')};
  color: ${props => (props.vendor ? '#049A01' : '#0D019A')};
  border: none;
  padding: 0.5rem 1rem;
  margin: ${props => (props.firstReview ? 0 : '1rem 0 2rem')};
`;

export const SubmitBtn = styled.button`
  display: block;
  background: #ff5c00;
  box-shadow: 2px 8px 30px rgba(230, 83, 0, 0.18);
  border-radius: 8px;
  border: none;
  padding: 1rem;
  color: #fff;
  margin: ${props => (props.congrats ? 'auto' : '0 0 0 auto')};
  /* margin-left: ${props => (props.congrats ? '0' : 'auto')}; */
  cursor: pointer;
  margin-top: 2rem;
  font-family: inherit;
`;
