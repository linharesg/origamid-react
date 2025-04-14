import React from 'react';

const Footer = () => {
  console.log(
    'renderizou footer. por causa do "memo", renrediza uma única vez. não vai renderizar junto toda vez que o elemento api renderizar',
  );

  return <div>Footer</div>;
};

export default React.memo(Footer);
