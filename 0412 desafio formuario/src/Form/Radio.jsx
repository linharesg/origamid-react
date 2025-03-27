import React from 'react';

const Radio = ({ id, pergunta, options, onChange, value, active }) => {
  if (!active) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            id={id}
            value={option}
            onChange={onChange}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
