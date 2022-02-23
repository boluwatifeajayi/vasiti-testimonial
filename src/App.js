import {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Story from './components/Story';
import Congrats from './components/Congrats';
import {GlobalStyles} from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [userReview, setUserReview] = useState([]);

  const addReview = review => {
    let post = [...userReview, review];

    setUserReview(post);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <GlobalStyles />
            <Header />
            <Main userReview={userReview} />
            <Footer />
          </Route>
          <Route exact path='/story'>
            <Story addReview={addReview} />
          </Route>
          <Route exact path='/congrats'>
            <Congrats />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
