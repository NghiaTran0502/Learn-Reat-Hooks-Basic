import React, { useEffect, useRef, useState } from 'react';


function useMagicColor() {

   const [magicColor, setMagicColor] = useState('transparent');

   const colorRef = useRef('transparent');




   const randomColor = (currentColor) => {
      const COLOR_LIST = ['red', 'green', 'yellow', 'black', 'blue'];
      const currentIndex = COLOR_LIST.indexOf(currentColor);
      let newIndex = currentIndex;

      while (currentIndex === newIndex) {
         newIndex = Math.trunc(Math.random() * 5)
      }

      return COLOR_LIST[newIndex];
   }

   // Change color every 1 seconds
   useEffect(() => {
      const colorTime = setInterval(() => {
         const newColor = randomColor(colorRef.current);
         setMagicColor(newColor);
         colorRef.current = newColor;
      }, 1000);
      return () => {
         clearInterval(colorTime);
      }
   }, [])

   return magicColor;
}

export default useMagicColor;