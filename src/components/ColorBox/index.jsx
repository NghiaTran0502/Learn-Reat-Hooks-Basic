import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'

ColorBox.propTypes = {

};

function ColorBox(props) {

   const [color, setColor] = useState(() => {
      return localStorage.getItem('color-box') || 'deeppink'
   });

   const getRandomColor = () => {
      const COLOR_LIST = ['deeppink', 'green', 'blue', 'yellow', 'black'];
      const randomIndex = Math.trunc(Math.random() * 5);
      return COLOR_LIST[randomIndex];
   }

   const handelBoxClick = () => {
      const newColor = getRandomColor();
      setColor(newColor);
      localStorage.setItem('color-box', newColor);
   }

   return (
      <div
         className='color-box'
         style={{ backgroundColor: color }}
         onClick={handelBoxClick}
      >
      </div>
   );
}

export default ColorBox;