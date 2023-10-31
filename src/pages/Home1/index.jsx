import React from "react";
import Navbar from "components/Navbar/Navbar";
import About from "components/About/About";
import Offer from "components/Offer/Offer";
import Aim from "components/Aim/Aim"
import Join from "components/WhyToJoin/Join";
import Test from "components/Testimonials/Testimonials";
import Promotion from "components/Promotion/Promotion";
import Update from "components/GetUpdates/Updates";
import SendMail from "components/SendMail/SendMail";
import GetContact from "components/GetInTouch/GetContact";
import Footer from "components/Footer/Footer";


const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro items-center justify-end mx-auto pt-[39px] w-full">
        <div className="flex flex-col md:gap-10 gap-40 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1145px] mx-auto md:px-5 w-full">
          <Navbar/>
          <About/>
            <Aim/>
            <Offer/>
            <Join/>
            <Test/>
          </div>
          <div className="flex flex-col md:gap-10 gap-40 items-center justify-start w-full">
            <Promotion/>
            <Update/>
            <footer className="flex items-center justify-center md:px-5 w-full">
              <div className="h-[1002px] relative w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start mb-[-159px] ml-auto mr-[150px] p-[37px] sm:px-5 shadow-bs w-[39%] z-[1]">
                  <SendMail/>
                </div>
                <GetContact/>
                <Footer/>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
