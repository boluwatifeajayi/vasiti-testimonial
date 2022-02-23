import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: rgba(37, 32, 29, 1);
  color: #fff;
  padding: 5rem 0;

  img {
    width: 100%;
    max-width: 454px;
  }

  form div {
    display: flex;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    padding: 5px;
    max-width: 368px;

    input {
      background: transparent;
      border: none;
      margin-left: 1rem;
      width: 100%;
    }

    button {
      background: #ffffff;
      box-shadow: 1px 4px 8px rgba(239, 88, 3, 0.2);
      border-radius: 4px;
      color: #000;
      padding: 1rem;
      border: none;
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  font-family: 'Roboto';

  h4 {
    margin-bottom: 2.5rem;
    font-size: 16px;
    line-height: 19px;
  }

  li + li {
    margin-top: 1.5rem;
  }

  a {
    color: #fff;
  }

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const FooterContent = styled.div`
  display: grid;
  margin-bottom: 3rem;

  h2 {
    font-size: 35px;
  }

  p {
    max-width: 368px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
  }

  > div {
    > * + * {
      margin-top: 1rem;
    }
  }

  img {
    display: block;
    margin: 2rem auto 0;
  }

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;

    > div {
      order: 2;
    }
    img {
      transform: translateY(-130px);
    }
  }
`;

export const JoinCommunity = styled.div`
  ul {
    display: flex;
    margin-bottom: 30px;
  }

  li + li {
    margin-top: 0;
    margin-left: 10px;
  }
`;
