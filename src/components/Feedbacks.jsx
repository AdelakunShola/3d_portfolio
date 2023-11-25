import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,


    responsive: [


      {
        breakpoint: 1225, // Adjust as needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "-33px",
        
      },
    },

    {
      breakpoint: 1157, // Adjust as needed
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "-45px",
      
    },
  },

  {
    breakpoint: 1160, // Adjust as needed
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-55px",
    
  },
},


{
  breakpoint: 1147, // Adjust as needed
settings: {
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "-55px",
  
},
},


{
  breakpoint: 1116, // Adjust as needed
settings: {
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "-65px",
  
},
},

{
  breakpoint: 1094, // Adjust as needed
settings: {
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "-75px",
  
},
},


{
  breakpoint: 1076, // Adjust as needed
settings: {
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "-75px",
  
},
},


      

      

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
         },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
      },
    },
    // Add more breakpoints as needed
  ],
  };


  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
