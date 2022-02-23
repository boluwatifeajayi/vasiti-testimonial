import styled from 'styled-components';

export const HeaderSection = styled.header`
  h1 {
    font-size: clamp(32px, 2vw + 20px, 48px);
    margin: 2rem 0;
    max-width: 512px;
  }

  p {
    font-size: 17px;
    line-height: 31px;
    letter-spacing: 0.02em;
    color: #494949;
  }

  .heroImg {
    display: block;
    width: 100%;
    max-width: 771px;
    margin: auto;
  }
`;

export const SubNav = styled.div`
  display: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  /* width: 90%; */
  /* max-width: 1200px; */
  margin: 1rem auto 2rem;
  font-family: 'Roboto', sans-serif;

  ul {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  ul li + li {
    margin-left: 1rem;
  }

  a {
    letter-spacing: 0.05em;
    line-height: 15px;
    color: #242120;
  }

  @media (min-width: 767px) {
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;

  width: 90%;
  max-width: 1200px;
  margin: 1rem auto 0;

  ul {
    display: none;
  }

  li + li {
    margin-left: 20px;
  }

  a {
    letter-spacing: 0.05em;
    line-height: 15px;
    color: #242120;
  }

  .signup-btn {
    display: block;
    padding: 1rem;
    background: #ff5c00;
    box-shadow: 1px 4px 8px rgba(239, 88, 3, 0.2);
    border-radius: 4px;
    color: #fff;
    margin-left: 1rem;
  }

  @media (min-width: 767px) {
    ul {
      display: flex;
      align-items: center;
    }
  }
`;

export const Hero = styled.div`
  > div {
    width: 90%;
    margin: auto;
  }

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    width: 90%;
    margin: auto;

    > div {
      width: 100%;
      max-width: 510px;
      margin: 0;
    }

    h1 {
      margin: 2rem 0;
    }
  }
`;
