import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => (
  <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mx-2'>
    <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
    </div>
  </div>
);

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          centerMode: true, 
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.sectionSubText}>Introduction</div>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled software developer with experience in TypeScript, PHP, Mysql, Html and Css, Mongodb and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className={styles.slickSlide}>
            <ServiceCard {...service} />
          </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
