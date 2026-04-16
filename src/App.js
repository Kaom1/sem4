import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function changeType() {
  let type = document.getElementById("type").value;
  let categ = document.getElementById("categ");

  if (type === "Доход") {
    categ.innerHTML = "<option>Поступление</option>";
  } else {
    categ.innerHTML = `
      <option>Еда</option>
      <option>Электроника</option>
      <option>Одежда</option>
    `;
  }
}

function add() {
  let type = document.getElementById("type").value;
  let categ = document.getElementById("categ").value;
  let sum = document.getElementById("sum").value;

  let list = localStorage.getItem("list");
  if (list == null) {
    list = "";
  }

  list = list + type + " / " + categ + " / " + sum + "\n";
  localStorage.setItem("list", list);

  window.location.reload();
}

function Main() {
  return (
    <div className="app">
      <h1>Учёт финансов</h1>
      
      <div className="link">
        <Link to="/Statistik" className="link">Статистика</Link>
      </div>

      <div className="lbl">
        <label>Тип: </label>
        <select id="type" onChange={changeType}>
          <option>Доход</option>
          <option>Расход</option>
        </select>
      </div>

      <div className="lbl">
        <label>Категория: </label>
        <select id="categ">
          <option>Поступление</option>
        </select>
      </div>

      <div className="lbl">
        <label>Сумма: </label>
        <input id="sum" type="number" min="0"/>
      </div>

      <button onClick={add}>Добавить</button>
    </div>
  );
}

function Statistik() {
  let list = localStorage.getItem("list");
  if (list == null) 
    list = "";

  let lines = list.split("\n");

  let dohod = 0;
  let rashod = 0;

  for (let i = 0; i < lines.length; i++) {
    let parts = lines[i].split(" / ");

    if (parts[2] >= 0) {
      if (parts[0] === "Доход") {
        dohod += Number(parts[2]);
      } else {
        rashod += Number(parts[2]);
      }
    }
  }

  return (
    <div className="app">
      <h1>Статистика</h1>

      <Link to="/" className="link">Ввести</Link>

      <h2>Статистика</h2>
      <p>Доход: {dohod}</p>
      <p>Расход: {rashod}</p>
      <p>Баланс: {dohod - rashod}</p>

      <div>
        <h2>Список операций</h2>

        <button onClick={() => {localStorage.clear(); window.location.reload()}}>
          Очистить
        </button>

        <pre>{list}</pre>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Statistik" element={<Statistik />} />
    </Routes>
  );
}

export default App;