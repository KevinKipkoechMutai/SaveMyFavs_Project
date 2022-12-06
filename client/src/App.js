
import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import MyFavorites from './MyFavorites';

function App() {

  // const cards = fetch('/my_favorites')
  // .then(res => res.json())


  return (
    <div>
      <Navbar />
      <HeroSection />
      <MyFavorites />
    </div>
  );
}

export default App;
