const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event) => {
  const searchName = event.queryStringParameters.name;

  const URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${searchName}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
