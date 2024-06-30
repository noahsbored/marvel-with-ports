import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>yooo welcome to marvel, prepare for some really coool marvel things</p>
      <p>you can explore comics and charecters </p>
      <Link to="/browse-characters">Browse Characters</Link>{' '}
      <Link to="/comics">View Comics</Link>
    </div>
  );
};

export default Home;
