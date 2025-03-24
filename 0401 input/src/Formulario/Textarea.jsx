import React from 'react';

const Textarea = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <>
    <label htmlFor="textarea">Textarea</label>
    <textarea
    id='textarea'
      value={textarea}
      onChange={({ target }) => setTextarea(target.value)}
      rows={5}
    />
    </>
  );
};

export default Textarea;
