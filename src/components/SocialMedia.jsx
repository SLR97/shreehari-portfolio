import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="mailto:shree97rl@gmail.com">
          <FiMail />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/srihari-shivom/' target='_blank' rel='noreferrer'>
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/s.h.r.e.e.__/' target='_blank' rel='noreferrer'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://github.com/SLR97' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
          <BsTwitter />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
