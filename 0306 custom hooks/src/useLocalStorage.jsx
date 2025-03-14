import React from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initialValue
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  
  return [state, setState]
  
};

export default useLocalStorage;