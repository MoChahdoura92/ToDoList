import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  let delButton = "❌";

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick(oldList) {
    setList([{ value: inputValue, type: "undone" }, ...oldList]);
    setInputValue("");
  }

  function handleClickToRemove(index) {
    const newList = list.filter((_, i) => i !== index);
    console.log(newList);
    console.log("Remove");
    setList(newList);
  }

  function handleTypeState(index) {
    const newList = list;
    if (newList[index].type === "undone") {
      newList[index].type = "done";
    } else if (newList[index].type === "done") {
      newList[index].type = "undone";
    }
    console.log(newList[index].type);
    setList(newList);
  }

  return (
    <>
      <div className="todo">
        <h2>Todo App</h2>
        <div className="cont">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your task here..."
          />
          <button onClick={() => handleClick(list)}>Add</button>
        </div>
        <ul>
          {list.map((item, index) => (
            <div className="item">
              <li
                key={index}
                onClick={() => handleTypeState(index)}
                className={item.type === "done" ? "done" : "undone"}
              >
                {item.value}
                <span onClick={() => handleClickToRemove(index)}>
                  {delButton}
                </span>
              </li>
            </div>
          ))}
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;
