import "./App.css";

function App() {
  return (
    <div className="todolist">
      <h1>TODOLIST</h1>
      <div className="input-area">
        <input
          className="user-input"
          type="text"
          placeholder="할일을 입력해주세요."
        />
        <button className="input-btn">+</button>
      </div>
      <div className="content">
        <ul>
          <li className="item">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <span>dddd</span>
            <button className="delete-btn">삭제</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
