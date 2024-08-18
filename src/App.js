import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.trim()) {
      setTodos([...todos, value]);
      setValue("");
    }
  };
  return (
    <div className="todolist">
      <h1>TODOLIST</h1>
      <div className="input-area">
        <input
          className="user-input"
          type="text"
          placeholder="할일을 입력해주세요."
          onChange={handleInputChange}
          value={value}
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
              <button className="delete-btn">삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
