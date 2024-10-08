'use client';

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import JokeCard from '../components/JokeCard';

function Home() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      setButton('Get Punchline');
    });
  };

  return (
    <>
      <JokeCard joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <Button type="button" onClick={getAJoke}>
          {btnText}
        </Button>
      ) : (
        <Button type="button" onClick={() => setButton('Get A New Joke')}>
          {btnText}
        </Button>
      )}
    </>
  );
}

export default Home;
