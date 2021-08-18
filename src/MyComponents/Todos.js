import React from 'react'
import { TodoItem } from '../MyComponents/TodoItem';

export const Todos = (props) => {

    let styles = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className='container my-33' style={styles}>
            <h3 className=" my-4" >To Do List</h3>

            {props.todos.length === 0 ? props.item :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItem todo={todo} onDelete={props.onDelete} /> <hr />
                        </>
                    )
                })

            }



        </div>
    )
}
