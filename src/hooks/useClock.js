import React, { useEffect, useState } from 'react';

function useClock(props) {

   const formatDate = (timeString) => {
      const hours = `0${timeString.getHours()}`.slice(-2);
      const minutes = `0${timeString.getMinutes()}`.slice(-2);
      const seconds = `0${timeString.getSeconds()}`.slice(-2);
      return `${hours}: ${minutes}: ${seconds}`
   }

   const [timeString, setTimeString] = useState('');
   useEffect(() => {
      const time = setInterval(() => {
         const now = new Date();
         const newTimeString = formatDate(now);
         setTimeString(newTimeString);
      }, 1000);

      return () => {
         clearInterval(time);
      }

   }, [])

   return { timeString };
}

export default useClock;