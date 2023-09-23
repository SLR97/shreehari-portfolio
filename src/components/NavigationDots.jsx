import React from 'react'


const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home','about', 'skills', 'work', 'contact'].map((item, index) => (
          <a 
            className='app__navigation-dot'
            href={`#${item}`} 
            key={item + index}
            onClick={() => setToggle(false)}
            style={ active === item ? { backgroundColor: "#313BAC"} : {}}
          />
      ))} 
    </div>
  )
}

export default NavigationDots
