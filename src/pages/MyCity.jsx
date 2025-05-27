import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/weather';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Kyiv');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchWeatherData(city);
        setWeather(data);
        setError(null);
      } catch (err) {
        setError('Не вдалося отримати дані про погоду');
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="container">
      <div className="my-city">
        <h2>Погода в місті</h2>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Введіть назву міста"
        />
        {loading && <p>Завантаження...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {weather && !loading && (
          <div>
            <h3>{weather.name}</h3>
            <p>Температура: {weather.main.temp} °C</p>
            <p>Опис: {weather.weather[0].description}</p>
            <p>Вологість: {weather.main.humidity}%</p>
            <p>Швидкість вітру: {weather.wind.speed} м/с</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCity;