import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventList from '../containers/EventList';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <>
      <Header />

      <Slider {...settings}>
        <div className="w-full h-[400px] relative overflow-hidden">
          <img src="boldbaatar.png" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[400px] relative overflow-hidden">
          <img src="zuniizugaa.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[400px] relative overflow-hidden">
          <img src="morningstar.png" alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[400px] relative overflow-hidden">
          <img src="gangbay.jpg" alt="Slide 4" className="w-full h-full object-cover" />
        </div>
      </Slider>

      <main className="p-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
        <EventList />
      </main>

      <Footer />
    </>
  );
};

export default Home;
