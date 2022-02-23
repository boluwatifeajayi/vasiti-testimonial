import styled from 'styled-components';

export const Form = styled.form`
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.02em;
  }

  > div + div {
    margin-top: 1rem;
  }

  p {
    color: rgba(103, 103, 103, 1);
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
  }

  label {
    display: inline-block;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    margin-bottom: 0.5rem;
    color: rgba(103, 103, 103, 1);
  }
  input[type='text'],
  textarea {
    width: 100%;
    background: #fefefe;
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    border-radius: 8px;
    display: block;
    padding: 1rem;
    font-family: inherit;
  }

  input[type='text']:focus,
  textarea:focus {
    border: 1px solid #ff5c00;
    outline: none;
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  margin: auto;
`;

export const StoryName = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const CustomerVendor = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  label + label {
    margin-left: 10px;
  }

  label input {
    margin-right: 5px;
  }
`;

export const Error = styled.div`
  color: red;
  text-align: center;
`;
