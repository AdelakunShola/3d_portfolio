import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
    options={{
      max: 15, // Adjust as needed
      scale: 1,
      speed: 450,
    }}
      
      className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full mx-auto'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className=' justify-center  cursor-pointer'
        >
          Link
        </div>
      </div>
    </Tilt>
  );
};

const Works = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    
    
    responsive: [


      {
        breakpoint: 1018, // Adjust as needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "-97px",
        
      },
    },

      {
        breakpoint: 1121, // Adjust as needed
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "87px",
        
      },
    },

      {
        breakpoint: 1126, // Adjust as needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "-37px",
        
      },
    },

      {
        breakpoint: 1156, // Adjust as needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "-40px",
        
      },
    },

      {
        breakpoint: 1183, // Adjust as needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "-20px",
        
      },
    },

      {
        breakpoint: 1124, // Adjust as needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
        
      },
    },

    {
      breakpoint: 1002, // Adjust as needed
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "-10px",
      
    },
  },

  {
    breakpoint: 819, // Adjust as needed
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-30px",
    
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
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {/* Your project description */}
        </motion.p>
      </div>
 
      <div className='mt-20 w-full max-w-6xl mx-auto gap-12'>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
