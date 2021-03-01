import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './MagicColor.scss'



function MagicBox() {

   const magicColor = useMagicColor();

   return (
      <div
         className='magic-color'
         style={{ backgroundColor: magicColor }}
      >

      </div>
   );
}

export default MagicBox;