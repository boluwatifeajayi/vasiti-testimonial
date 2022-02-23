import React from 'react';
import {HeaderSection, Hero, Nav, SubNav} from '../styles/HeaderStyle';

const Header = () => {
  return (
    <HeaderSection>
      <Nav>
        <a href='/'>
          <img src='./images/vasiti-logo.svg' alt='Vasiti Logo' />
        </a>
        <ul>
          <li>
            <a href='/'>ABOUT US</a>
          </li>
          <li>
            <a href='/'>STORIES</a>
          </li>
          <li>
            <a href='/'>CONTACT</a>
          </li>
          <li>
            <a href='/'>LOG IN</a>
          </li>
          <a className='signup-btn' href='/'>
            SIGN UP
          </a>
        </ul>
      </Nav>
      <SubNav>
        <ul>
          <li>
            <a href='/'>MARKETPLACE</a>
          </li>
          <li>
            <a href='/'>WHOLESALE CENTER</a>
          </li>
          <li>
            <a href='/'>SELLER CENTER</a>
          </li>
          <li>
            <a href='/'>SERVICES</a>
          </li>
          <li>
            <a href='/'>INTERNSHIPS</a>
          </li>
        </ul>
      </SubNav>
      <Hero>
        <div>
          <h1>Amazing Experiences from Our Wonderful Customers</h1>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <picture>
          <source
            media='(min-width: 477.49px)'
            srcSet='https://wholesale.vasiti.com/testimonial-hero.webp'
          />
          <img
            className='heroImg'
            src='https://wholesale.vasiti.com/testimonial-hero.webp'
            alt='Man and Woman smiling'
          />
        </picture>
      </Hero>
    </HeaderSection>
  );
};

export default Header;
