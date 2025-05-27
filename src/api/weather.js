export const fetchWeatherData = async (city) => {
  try {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    if (!apiKey) {
      throw new Error('API-ключ не знайдено. Перевірте, чи створено файл .env із змінною REACT_APP_WEATHER_API_KEY');
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=uk`;
    console.log('Виконується запит до:', url.replace(apiKey, 'HIDDEN_KEY'));
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP помилка: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Отримані дані про погоду:', data);
    return data;
  } catch (error) {
    console.error('Помилка при отриманні даних про погоду:', error.message);
    throw error;
  }
};