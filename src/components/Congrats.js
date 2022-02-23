import React from 'react';
import {GlobalStyles, SubmitBtn} from '../globalStyles';
import {CongratsContainer} from '../styles/CongratsStyle';
import {Link} from 'react-router-dom';

const Congrat = () => {
  return (
    <CongratsContainer>
      <GlobalStyles />
      <div>
        <img src='./images/congrats.svg' alt='' />
        <h1>Thank you for sharing your story!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <SubmitBtn congrats>
          <Link to='/#new-testimonial' className='close'>
            Close
          </Link>
        </SubmitBtn>
      </div>
    </CongratsContainer>
  );
};

export default Congrat;
