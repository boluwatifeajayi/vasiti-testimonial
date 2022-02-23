import {useState} from 'react';
import {GlobalStyles, SubmitBtn} from '../globalStyles';
import {
  Form,
  StoryContainer,
  StoryName,
  CustomerVendor,
  Error,
} from '../styles/StoryStyle';
import {useHistory} from 'react-router-dom';

const Story = ({addReview}) => {
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [story, setStory] = useState('');
  const [customerVendor, setCustomerVendor] = useState('');
  const [error, setError] = useState('none');
  const [errorMessage, setErrorMessage] = useState('');

  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    if (
      image === '' ||
      firstName === '' ||
      lastName === '' ||
      story === '' ||
      customerVendor === ''
    ) {
      setTimeout(() => {
        setError('block');
      }, 20);

      return false;
    }

    if (validateUrl(image) === false) {
      setError('block');
      setErrorMessage('Incorrect Image Link');
      return;
    }

    addReview({image, firstName, lastName, customerVendor, story});

    setImage('');
    setFirstName('');
    setLastName('');
    setStory('');

    history.push('/congrats');
  };

  function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  }
  return (
    <StoryContainer>
      <GlobalStyles />

      <Form onSubmit={e => handleSubmit(e)}>
        <h1>Share your amazing story!</h1>
        <Error style={{display: `${error}`}}>
           {errorMessage ? errorMessage : 'Please fill all inputs'}
        </Error>
        <div>
          <label htmlFor='picture'>Upload your Picture</label>
          <input
            value={image}
            type='text'
            name='picture'
            id='picture'
            placeholder='Enter a link to an image'
            onChange={e => setImage(e.target.value)}
          />
        </div>
        <StoryName>
          <div>
            <label htmlFor='fname'>First Name</label>
            <input
              value={firstName}
              type='text'
              name='fname'
              id='fname'
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='lname'>Last Name</label>
            <input
              value={lastName}
              type='text'
              name='lname'
              id='lname'
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </StoryName>
        <div>
          <label htmlFor='story'>Share your story</label>
          <textarea
            value={story}
            name='story'
            id='story'
            cols='20'
            rows='10'
            onChange={e => setStory(e.target.value)}
          ></textarea>
        </div>
        <CustomerVendor>
          <p>What did you interact with Vasiti as?</p>

          <div>
            <label htmlFor='customer'>
              <input
                onChange={() => setCustomerVendor('Customer')}
                type='radio'
                name='interact'
                id='interact'
              />
              Customer
            </label>
            <label htmlFor='customer'>
              <input
                onChange={() => setCustomerVendor('Vendor')}
                type='radio'
                name='interact'
                id='interact'
              />
              Vendor
            </label>
          </div>
        </CustomerVendor>

        <SubmitBtn type='submit'>Share your story!</SubmitBtn>
      </Form>
    </StoryContainer>
  );
};

export default Story;
