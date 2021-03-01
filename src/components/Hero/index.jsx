import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
   name: PropTypes.string,
};

Hero.defaultProps = {
   name: ''
}

function Hero({ name }) {
   console.log(name);
   return (
      <p>Hello: {name}</p>
   );
}

export default React.memo(Hero);