import React from 'react';

interface Props {
  width?: number,
  children: string
}

const Button = ({width = 100, children}: Props) => {
  const [contar, setContar] = React.useState(0)
  
  return (
    <button
    onClick={() => setContar(contar + 1)}
    style={{ width: `${width}px`, height: `${width / 3}px` }}
    >
      {children}{" "}{contar}
    </button>
  );
};

export default Button;

// ------------ PropTypes deprecated ------------

// import PropTypes from 'prop-types';

// const Button = (props) => {
//   return (
//     <button
//       style={{ width: `${props.width}px`, height: `${props.width / 3}px` }}
//     >
//       {props.children}
//     </button>
//   );
// };

// Button.propTypes = {
//   width: PropTypes.number.isRequired,
// }

