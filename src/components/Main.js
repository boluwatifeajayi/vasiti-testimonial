import React from 'react';
import {
  Experience,
  ExperienceContent,
  CustomerReview,
  Experience2,
  ExperienceContent2,
  UserImage,
  LocationType,
} from '../styles/MainStyles';
import {Container, Button} from '../globalStyles';
import {Link} from 'react-router-dom';
import {firstReview, secondReview} from '../review';

const Main = ({userReview}) => {
  return (
    <main>
      <Experience>
        <ExperienceContent>
          <div>
            <h2>Uche’s Experience</h2>
            <button>CUSTOMER</button>
            <p>
            I've been shopping on Vasiti for a few years now and my experience is always fantastic. I'm always very impressed with their fast delivery, friendly customer service and even the low prices of stuff on their website. I can confidently say Vasiti puts their customers first.
            </p>
            <Link to='/story' className='share'>
              Share your own story!
            </Link>
          </div>
          <picture>
            <source
              media='(min-width: 477.49px)'
              srcSet='https://wholesale.vasiti.com/images/Widget1.png'
            />
            <img src='https://wholesale.vasiti.com/images/Widget1.png' alt='Black girls' />
          </picture>
        </ExperienceContent>
      </Experience>

      <CustomerReview>
        {firstReview.map((data, i) => {
          return (
            <>
              <section key={i}>
                <Container>
                  <img src={data.image} alt={data.alt} />
                  <h3>{data.name}</h3>
                  <LocationType>
                    <p>{data.location}</p>
                    {data.type === 'CUSTOMER' ? (
                      <Button firstReview>{data.type}</Button>
                    ) : (
                      <Button vendor firstReview>
                        {data.type}
                      </Button>
                    )}
                  </LocationType>
                  <p>{data.review}</p>
                </Container>
              </section>
            </>
          );
        })}
      </CustomerReview>

      <Experience2>
        <ExperienceContent2>
          <picture>
            <source
              media='(min-width: 477.49px)'
              srcSet='https://wholesale.vasiti.com/karen.webp'
            />
            <img
              src='https://wholesale.vasiti.com/karen.webp'
              alt='Woman smiling'
            />
          </picture>
          <div>
            <h2>Karen’s Experience</h2>
            <button>VENDOR</button>
            <p>
            I can't count the number of things I've ordered on Vasiti and the entire process is always very smooth. The website is easy to use, the delivery is really fast and the products are usually good. The time I had to return a faulty product, it was much easier than expected and I got my refund the next day. In a nutshell, shopping on Vasiti has been great and I'll continue to refer people to shop here.
            </p>
            <Link to='/story' className='share'>
              Share your own story!
            </Link>
          </div>
        </ExperienceContent2>
      </Experience2>

      <CustomerReview>
        {secondReview.map((data, i) => {
          return (
            <>
              <section key={i}>
                <Container>
                  <img src={data.image} alt={data.alt} />
                  <h3>{data.name}</h3>
                  <div>
                    <Button vendor>{data.type}</Button>
                  </div>
                  <p>{data.review}</p>
                </Container>
              </section>
            </>
          );
        })}
      </CustomerReview>

      <CustomerReview id='new-testimonial'>
        {userReview.length
          ? userReview.map((data, i) => {
              return (
                <>
                  <section key={i}>
                    <Container>
                      <UserImage src={data.image} alt='User Reviewer' />
                      <h3>
                        {data.firstName} {data.lastName}
                      </h3>
                      <div>
                        {data.customerVendor === 'CUSTOMER' ? (
                          <Button>{data.customerVendor}</Button>
                        ) : (
                          <Button vendor>{data.customerVendor}</Button>
                        )}
                      </div>
                      <p>{data.story}</p>
                    </Container>
                  </section>
                </>
              );
            })
          : ''}
      </CustomerReview>
    </main>
  );
};

export default Main;
