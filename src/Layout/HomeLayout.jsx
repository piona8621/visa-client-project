

import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';

import Footer from '../Components/Footer';
// import Home from '../Components/Home';
import LatestVisas from '../Components/LatestVisas';
import PopularVisaCategories from '../Components/PopularVisaCategories';
import WhyChooseUs from '../Components/WhyChooseUs';
import Navbar from '../Components/Navbar';
import TopRatedCampaigns from '../Components/TopRatedCampaigns';
// import Categories from '../Components/Categories';
import Blog from '../Components/Blog';
import Newsletter from '../Components/NwesLetter';
import ReviewSection from '../Components/ReviewSection';
// import Newsletter from '../Components/NwesLetter';





const HomeLayout = () => {

  
  return (
    <div>

      
      <Helmet>
        <title>Visa Navigator | Home</title>
      </Helmet>
      
      
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <Banner></Banner>
    <LatestVisas></LatestVisas>
      <WhyChooseUs></WhyChooseUs>
      <TopRatedCampaigns></TopRatedCampaigns>
      <ReviewSection></ReviewSection>
      <Blog></Blog>
      <PopularVisaCategories></PopularVisaCategories>
      <Newsletter></Newsletter>
      <Footer></Footer>
      
    
      
    </div>
  );
};

export default HomeLayout;