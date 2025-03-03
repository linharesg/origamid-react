import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
        <Input label="Email" id="email" required/>
        <Input label="Password" type="password" id="password"/>
      <Button />
    </form>
  );
};

export default Form;
