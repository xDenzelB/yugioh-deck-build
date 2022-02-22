const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event) => {
  const { name, num, offset } = event.queryStringParameters;

  const URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${name}&num=${num}&offset=${offset}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
