// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';

function Home() {
  // const [joke, setJoke] = useState();

  const getTheJoke = () => {
    getJoke().then((obj) => {
      console.warn(obj.setup);
      console.warn(obj.delivery);
    });
  };
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Get Joke</h1>
        <Button type="button" onClick={getTheJoke}>Get Joke</Button>
      </div>
    </>
  );
}

export default Home;
