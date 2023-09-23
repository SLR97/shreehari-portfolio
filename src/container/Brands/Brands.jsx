import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

import './Brands.scss'

function Brands() {

  const [brands, setBrands] = useState([]);


  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <>
      {/* Brands */}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div 
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

// export default AppWrap(
//   MotionWrap(Brands, 'app__brands'),
//   'brands',
//   'app__primarybg'
// );

export default Brands