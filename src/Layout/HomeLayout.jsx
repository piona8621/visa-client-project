

import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';

import Footer from '../Components/Footer';
import Home from '../Components/Home';
import LatestVisas from '../Components/LatestVisas';
import PopularVisaCategories from '../Components/PopularVisaCategories';
import WhyChooseUs from '../Components/WhyChooseUs';
import Navbar from '../Components/Navbar';





const HomeLayout = () => {

  
  return (
    <div>

      
      <Helmet>
        <title>Visa Navigator | Home</title>
      </Helmet>
      
      
      <Navbar></Navbar>
      <Home></Home>
      <Banner></Banner>
    <LatestVisas></LatestVisas>
      <WhyChooseUs></WhyChooseUs>
      <PopularVisaCategories></PopularVisaCategories>
      <Footer></Footer>
    
      
    </div>
  );
};

export default HomeLayout;