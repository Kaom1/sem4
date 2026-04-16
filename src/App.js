import "./App.css";

function changeType() {
  let type = document.getElementById("type").value;
  let tip = document.getElementById("tip");

  if (type === "Доход") {
    tip.innerHTML = "<option>Поступление</option>";
  } else {
    tip.innerHTML = `
      <option>Еда</option>
      <option>Электроника</option>
      <option>Одежда</option>
    `;
  }
}

function App() {
  return (
    <div className="app">
      <h1>Учёт финансов</h1>

      <div className="lbl">
        <label>Тип: </label>
        <select id="type" onChange={changeType}>
          <option>Доход</option>
          <option>Расход</option>
        </select>
      </div>

      <div className="lbl">
        <label>Категория: </label>
        <select id="tip">
          <option>Поступление</option>
        </select>
      </div>

      <div className="lbl">
        <label>Сумма: </label>
        <input id="sum" type="number" min="0"/>
      </div>
      <button>Добавить</button>
    </div>
  );
}

export default App;