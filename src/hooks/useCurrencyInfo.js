import { useState, useEffect } from 'react';

const API_KEY = 'ff88228f1b3a9692118e4583'; // Replace with your API key

const useCurrencyInfo = (baseCurrency) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`);
        const data = await response.json();
        if (data.conversion_rates) {
          setCurrencyInfo(data.conversion_rates);
        } else {
          console.error('Failed to fetch currency data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
  }, [baseCurrency]);

  return currencyInfo;
};

export default useCurrencyInfo;
