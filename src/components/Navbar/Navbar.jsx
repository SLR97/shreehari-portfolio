import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BiSolidCloudDownload } from 'react-icons/Bi'
import { motion } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants';

function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <video src={images.logovid} alt="logo" href='#home' width='50' height='50'/> {/* width="90px" */}
      </div>
      <ul className='app__navbar-links'>
        {['home','about', 'skills', 'work', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__downloadable-resume'>
        <a href="/path-to-resume.pdf" download="your-resume.pdf">
          <BiSolidCloudDownload size={40}/> <div>Resume</div>
        </a>
      </div>

      <div className='app_menu'>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)}/>
            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0]}}
                transition={{ duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)}/>
                <ul>
                  {['home','about', 'skills', 'work', 'contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
