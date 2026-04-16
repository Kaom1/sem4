import "./App.css";

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
        <select id="categ">
          <option>Поступление</option>
        </select>
      </div>

      <div className="lbl">
        <label>Сумма: </label>
        <input id="sum" type="number" min="0"/>
      </div>
      <button onClick={add}>Добавить</button>

      <div>
        <h2>Список операций</h2>
        <button onClick={()=>{localStorage.clear(); window.location.reload()}}>Очистить</button>
        <pre>
          {localStorage.getItem("list") == null ? "" : localStorage.getItem("list")}
        </pre>
      </div>
    </div>
  );
}

export default App;