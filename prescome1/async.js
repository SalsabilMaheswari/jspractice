const fetch = require('node-fetch'); // Pastikan untuk menginstal node-fetch jika menggunakan Node.js

const API_KEY_WEATHER = '8da9f051b5269f51ca25dbbb5edb350d'; // Ganti dengan kunci API Anda
const API_KEY_NEWS = '33583470dfca4097be36df7d00ec09c9'; // Ganti dengan kunci API Anda

// Fungsi untuk mengambil data cuaca
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
        };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch weather data');
    }
}

// Fungsi untuk mengambil data berita
async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY_NEWS}`);
        if (!response.ok) {
            throw new Error(`Error fetching news data: ${response.statusText}`);
        }
        const data = await response.json();
        return data.articles.map(article => ({
            title: article.title,
            url: article.url,
        }));
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch news data');
    }
}

// Fungsi utama untuk menggabungkan data cuaca dan berita
async function displayWeatherAndNews(city) {
    try {
        const weather = await getWeather(city);
        const news = await getNews();

        console.log(`Cuaca di ${weather.city}:`);
        console.log(`Temperatur: ${weather.temperature}°C`);
        console.log(`Deskripsi: ${weather.description}`);
        console.log('\nBerita Terkini:');
        news.forEach((article, index) => {
            console.log(`${index + 1}. ${article.title} - ${article.url}`);
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}

// Panggil fungsi dengan kota yang diinginkan
displayWeatherAndNews('London');