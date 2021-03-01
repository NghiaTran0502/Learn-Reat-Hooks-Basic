import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TodoForm(props) {
   const { onSubmit } = props;

   const [value, setValue] = useState('');

   const formSubmit = (e) => {
      e.preventDefault()
      if (!onSubmit) return;
      const formValues = {
         title: value,
         id: Date.now()
      };
      onSubmit(formValues);
      setValue('');
   }

   return (
      <form onSubmit={formSubmit}>
         <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </form>
   )
}

TodoForm.propTypes = {
   onSubmit: PropTypes.func,
}

TodoForm.defaultProps = {
   onSubmit: null
}

export default TodoForm

