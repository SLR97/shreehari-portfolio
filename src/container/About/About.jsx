import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   { 
//     title: "Web Development",
//     description: "I am a good Web Developer.",
//     imgUrl: images.about01,
//   },
//   { 
//     title: "Frontend Development",
//     description: "I am a good Frontend Developer.",
//     imgUrl: images.about02
//   },
//   { 
//     title: "Backend Development",
//     description: "I am a good Backend Developer.",
//     imgUrl: images.about03
//   },
//   { 
//     title: "MERN Stack",
//     description: "I am a good MERN Stack Developer.",
//     imgUrl: images.about04
//   }
// ]

function About() {

  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query)
  //     .then((data) => setAbouts(data))
  // }, [])

  return (
    <>
      <h2 className='head-text'>
        Business-Driven <span>Cloud & DevOps Engineer</span>,<br /> Building Solutions for <span>Success.</span>
        {/* I know That <span>Good Dev</span><br />means <span>Good Business</span> */}
      </h2>

      <div className='about-section'>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween'}}
          className='app__profile-item'
        >
          <h1 className="head-text" style={{marginTop: 20}}><u>About</u> <span><u>me</u></span></h1>
          <p style={{marginTop: 10}}>
            {/* As an avid explorer of <label>full-stack technologies</label>, 
            I thrive on delving into the intricate layers of both <label>front-end </label>and <label>back-end development</label>, 
            continuously expanding my knowledge and expertise to create seamless and cutting-edge web applications. */}

            Having <label>7+ years</label> of total work experience in information technology.
            Relevant 4+ years of experience in the implementation of information systems using <label>DevOps</label> along with <label>AWS.</label>
          </p>
        </motion.div>
      </div>
    </>

    // <>
    //   <h2 className='head-text'>
    //     I know That <span>Good Dev</span><br />means <span>Good Business</span>
    //   </h2>

    //   <div className='app__profiles'>

    //     {abouts.map((about, index) => (
    //       <motion.div
    //         whileInView={{ opacity: 1 }}
    //         whileHover={{ scale: 1.1 }}
    //         transition={{ duration: 0.5, type: 'tween'}}
    //         className='app__profile-item'
    //         key={about.title + index}
    //       >
    //         <img src={urlFor(about.imgUrl)} alt={about.title}/>
    //         <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
    //         <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
    //       </motion.div>
    //     ))}
    //   </div>
    // </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
  );

// export default About
