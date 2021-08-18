import React from 'react'


export const TodoItem = ({ todo,onDelete }) => {
    let Styles = {
       left : "700px"
    }
    return (
        <div style={Styles}>
            <h4 >{todo.title}</h4>
            <p>{todo.des}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>(onDelete(todo))}>Delete</button>
        </div>
      
       
    )
}
