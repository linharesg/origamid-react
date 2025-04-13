import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let jsonResponse;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      jsonResponse = await response.json();
    } catch (error) {
      jsonResponse = null;
      setError(true);
    } finally {
      setData(jsonResponse);
      setLoading(false);
      return { response, jsonResponse };
    }
  });

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
