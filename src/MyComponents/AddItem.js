import React from 'react'
import react, { useState } from 'react';

export const AddItem = (props) => {
  const [title, settitle] = useState('');
  const [des, setdes] = useState("")

  const submit = (e) => {
    e.preventDefault();

    // if(!title || !des){
    //   alert("Title and description cannot be empty!")
    // }

    // else{
    props.addTodo(title, des)
    settitle("")
    setdes("")
    //}


  }

  return (
    <div className="container my-3">
      <h4>Add a todo</h4>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" className="form-label">Todo  Title</label>
          <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" required />

        </div>
        <div className="mb-3">
          <label for="des" className="form-label">To Do Description</label>
          <input type="text" value={des} onChange={(e) => { setdes(e.target.value) }} className="form-control" id="des" required />
        </div>

        <button type="submit" className="btn  btn-success">Add Todo</button>
      </form>
    </div>
  )
}
