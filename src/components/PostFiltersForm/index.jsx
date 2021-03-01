import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
   onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProp = {
   onSubmit: null
}

function PostFiltersForm(props) {

   const { onSubmit } = props;
   const [searchTerm, setSearchTerm] = useState('');
   const typingTimeoutRef = useRef(null);



   const handelInputChange = (e) => {
      const value = e.target.value
      setSearchTerm(value);

      if (!onSubmit) return;

      // Debounce
      if (typingTimeoutRef.current) {
         clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
         const formValues = {
            searchTerm: value
         }
         onSubmit(formValues);
      }, 300);
   }

   return (
      <form>
         <input
            type="text"
            value={searchTerm}
            onChange={handelInputChange}
         />
      </form>
   );
}

export default PostFiltersForm;