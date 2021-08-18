//import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { AddItem } from './MyComponents/AddItem';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    localStorage.getItem("todos", JSON.stringify(todos))
  }

  let items = "No items to diplay!"

  const addTodo = (title, des) => {
    const myTodo = {
      title: title,
      des: des
    }
    setTodos([...todos, myTodo])
  }


  let [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <Router>
        <Header title="My Todos List" searchbar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddItem addTodo={addTodo} />
                <addTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              </>
            )
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
