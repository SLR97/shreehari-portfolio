import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { images } from '../../constants';

// const skills = [
//   {
//     name: "HTML",
//     // bgColor: "#edf2f8",
//     icon: images.html
//   },
//   {
//     name: "CSS",
//     // bgColor: "#edf2f8",
//     icon: images.css
//   },
//   {
//     name: "Javascript",
//     // bgColor: "#edf2f8",
//     icon: images.javascript
//   },
//   {
//     name: "MongoDB",
//     // bgColor: "#edf2f8",
//     icon: images.mongodb
//   },
//   {
//     name: "Express",
//     // bgColor: "#edf2f8",
//     icon: images.express
//   },
//   {
//     name: "React",
//     // bgColor: "#edf2f8",
//     icon: images.react
//   },
//   {
//     name: "Node",
//     // bgColor: "#edf2f8",
//     icon: images.node
//   },
//   {
//     name: "Git",
//     // bgColor: "#edf2f8",
//     icon: images.git
//   },
//   {
//     name: "VS Code",
//     // bgColor: "#edf2f8",
//     icon: images.vscode
//   },
//   {
//     name: "Sass",
//     // bgColor: "#edf2f8",
//     icon: images.sass
//   },
//   {
//     name: "Python",
//     // bgColor: "#edf2f8",
//     icon: images.python
//   }
// ]

function Skills() {

  // const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([])

  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query)
    //   .then((data) => {
    //     setExperience(data);
    //   });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });
  }, []);

  console.log(skills);

  return (
    <>
      <h2 className='head-text'> Skills</h2>

      <div className='app__skills-container'>

        {/* Skills */}

        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition= {{ duration: 0.5 }}  
              className='app__skills-item app__flex'
              key={skill.name + index}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                {/* <img src={urlFor(skill.icon)} alt={skill.name} /> */}

                <img src={urlFor(skill.icon)} alt={skill.name} />

              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experiences */}

        {/* <motion.div className='app__skills-exp'>
            {experience?.map((experience) => (
              <motion.div
                className='app__skills-exp-item'
                key={experience.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>

                <motion.div
                  className='app__skills-exp-works'
                >
                  {experience.works.map((work, index) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition= {{ duration: 0.5 }}  
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}
                        key={work.name + index}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className='skills-tooltip'
                      >
                        {work.desc}
                      </ReactTooltip>
                  </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div> */}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg'
  );
