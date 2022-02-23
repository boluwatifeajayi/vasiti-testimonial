import styled from 'styled-components';

export const CongratsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  width: 90%;
  margin: auto;
  max-width: 330px;

  h1 {
    margin: 2rem 0;
  }

  p {
    font-size: 12px;
    line-height: 28px;
    color: #4a4a4a;
  }

  .close {
    color: #fff;
  }
`;
