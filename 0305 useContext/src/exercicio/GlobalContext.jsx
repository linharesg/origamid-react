import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    (async () => {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
        if (response.status === 200) {
          const responseJson = await response.json();
          setProdutos(responseJson)
        }
    })()
  }, []);

  function limparDados() {
    setProdutos(null)
  }
  
  return (
    <GlobalContext.Provider value={{ produtos, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
