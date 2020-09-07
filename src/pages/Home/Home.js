/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './Home.css';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import repo from '../../repositories/categorias';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const URL = 'https://tranquil-beach-70411.herokuapp.com/videos';
      const response = await fetch(URL);
      const data = await response.json();

      if (data) {
        setCategories([
          ...data,
        ]);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Menu />
      <BannerMain
        videoTitle="Loveless"
        videoDescription="Tracks"
        url="https://www.youtube.com/watch?v=OrMjc4oz0mY&t=1732s"
      />
      {categories.length === 0 && (<div className="centered"><img height="100" src="https://media.giphy.com/media/8JT9yYAwcLqLMeySyL/giphy.gif" /></div>)}

      {categories.length >= 1 && categories.map((category) => <Carousel category={category} />)}

      <Footer />
    </>
  );
}

export default Home;
