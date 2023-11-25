import React from "react";
import Slider from "react-slick";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
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
        breakpoint: 1133,
        settings: {
          slidesToShow: 4,
          centerPadding: "-20px",
          centerMode: true,
        },
      },

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
          centerMode: true,
        },
      },

      {
        breakpoint: 879,
        settings: {
          slidesToShow: 3,
          centerPadding: "-30px",
          centerMode: true,
        },
      },

      {
        breakpoint: 815,
        settings: {
          slidesToShow: 3,
          centerPadding: "-50px",
          centerMode: true,
        },
      },

      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          centerMode: true,
        },
      },


      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          centerPadding: "-20px",
          centerMode: true,
        },
      },

      {
        breakpoint: 588,
        settings: {
          slidesToShow: 2,
          centerPadding: "-30px",
          centerMode: true,
        },
      },

 
      {
        breakpoint: 488,
        settings: {
          slidesToShow: 2,
          centerPadding: "-50px",
          centerMode: true,
        },
      },


      {
        breakpoint: 410,
        settings: {
          slidesToShow: 2,
          centerPadding: "-50px",
          centerMode: true,
        },
      },

      

      
    ],
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript, PHP, Mysql, Html and Css, Mongodb and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20'>
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
