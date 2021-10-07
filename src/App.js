// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ShowTodo from "./components/ShowTodo";
import { useState, useEffect } from 'react';
// import uuid from "uuidv4"

function App() {

  const [TodoItems, setTodoItems] = useState([]);

  const LOCAL_STORAGE_KEY = "todos";

  useEffect(() => {
    const retrieveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveTodos)
      setTodoItems(retrieveTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(TodoItems));
  }, [TodoItems])


  const addTodoHandler = (todo) => {
    setTodoItems([...TodoItems, todo])
  }

  return (
    <div>
      <Header />
      <AddTodo addTodoHandler={addTodoHandler} />
      <ShowTodo TodoItems={TodoItems} />
    </div>
  );
}

export default App;
