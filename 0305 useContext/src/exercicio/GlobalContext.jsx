import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    (async () => {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
        if (response.status === 200) {
          const responseJson = await response.json();
          setProduto(responseJson)
        }
    })()
  }, []);

  return (
    <GlobalContext.Provider value={{ produto }}>
      {children}
    </GlobalContext.Provider>
  );
};
