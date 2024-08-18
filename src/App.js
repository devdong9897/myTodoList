import { useEffect, useState } from "react";
import "./App.css";
import { getWeatherApi } from "./api";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [weather, setWeather] = useState(null);

  const getCurrent = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const weatherData = await getWeatherApi(lat, lon);
      console.log(weatherData);
      setWeather(weatherData);
    });
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.trim()) {
      setTodos([...todos, value]);
      setValue("");
    }
  };

  const handleEnterChange = (e) => {
    if (e.key === "Enter") {
      handleClick();
      setValue("");
    }
  };

  const deleteClick = (indexToDelete) => {
    const deleteSelect = todos.filter((_, index) => index !== indexToDelete);
    setTodos(deleteSelect);
  };

  useEffect(() => {
    getCurrent();
  }, []);

  return (
    <>
      <div className="todolist">
        <h1>TODOLIST</h1>
        <div className="input-area">
          <input
            className="user-input"
            type="text"
            placeholder="할일을 입력해주세요."
            onChange={handleInputChange}
            value={value}
            onKeyUp={handleEnterChange}
          />
          <button className="input-btn" onClick={() => handleClick()}>
            +
          </button>
        </div>
        <div className="content">
          <ul>
            {todos.map((todo, index) => (
              <li className="item" key={index}>
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <span>{todo}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteClick(index)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {weather && (
        <div className="container">
          <p>현재 위치: {weather?.name}</p>
          <p>현재 온도: {weather?.main.temp}</p>
          <p>현재 날씨: {weather?.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </>
  );
}

export default App;
