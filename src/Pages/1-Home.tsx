import React from 'react';
import { Landing } from '../Components';
import cover from '../assets/images/cover2.jpg';

const Home = () => {
  return (
    <section
      className="bg-cover bg-center w-screen h-screen"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <Landing />
    </section>
  );
};

export default Home;
