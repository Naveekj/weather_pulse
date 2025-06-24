const fetch = require("node-fetch");

exports.handler = async (event) => {
  const city = event.queryStringParameters.city || "Colombo";
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch weather data" }),
    };
  }
};
