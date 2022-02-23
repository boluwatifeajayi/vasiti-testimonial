import styled from 'styled-components';

export const Experience = styled.section`
  background: rgba(34, 34, 34, 1);
  color: #fff;
`;

export const Experience2 = styled(Experience)`
  background: rgba(255, 248, 245, 1);
  color: #242120;

  @media (min-width: 1024px) {
    h2 {
      font-size: 32px;
      line-height: 39px;
      letter-spacing: 0.01em;
    }
  }
`;

export const ExperienceContent = styled.section`
  > div {
    width: 90%;
    margin: 0 auto 0;
    padding: 2rem 0;
  }

  .share {
    font-size: 15px;
  }

  > div {
    padding: 5rem 2rem 3rem;

    p {
      margin: 1rem 0;
      letter-spacing: 0.02em;
      line-height: 150%;
      font-size: 13px;
    }
  }

  button {
    border: 1px solid #fff;
    border-radius: 4px;
    background: transparent;
    color: #fff;
    padding: 0.5em;
    margin-top: 0.5rem;
  }

  img {
    /* position: absolute; */
    display: block;
    width: 100%;
    margin: auto;
    margin-top: 15%;
  }

  @media (min-width: 767px) {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto 0;

    > div {
      order: 1;
      align-content: center;
      margin: auto;
      padding-top: 0;

      p {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1200px) {
    img {
      /* transform: translateY(20px); */
      margin-top: 40px;
      max-width: 500px;
    }
  }
`;

export const ExperienceContent2 = styled(ExperienceContent)`
  .share {
    color: rgba(255, 92, 0, 1);
    font-size: 15px;
  }

  button {
    color: rgba(255, 92, 0, 1);
    border: 1px solid rgba(255, 92, 0, 1);
  }

  @media (min-width: 767px) {
    picture {
      order: 2;
    }
  }
`;

export const CustomerReview = styled.div`
  display: grid;
  grid-gap: 5rem;
  margin: 4rem auto 8rem;
  max-width: 1200px;

  h3 {
    text-transform: capitalize;
  }

  p {
    word-wrap: break-word; /* old name */
    overflow-wrap: break-word;
  }

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const LocationType = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 1rem 0 2rem;
`;
