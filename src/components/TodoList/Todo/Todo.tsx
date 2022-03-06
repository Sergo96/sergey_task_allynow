import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../../../redux/actions/actions";
import { iTodos } from "../../../types/types";
import styles from './Todo.module.scss'


export const Todo = ({text, completed, id}:iTodos) => {  
    const dispatch = useDispatch();
    const [editActive, setEditActive] = useState<boolean>(false);

    const editClickHandler = () => setEditActive(prev => !prev)
    const deleteTodoHandler = () => dispatch(deleteTodo(id))
      
    return (
        <>
            <li className={styles.root}>
                <input value={id} checked={completed} onChange={(event) => dispatch(toggleTodo(+event.target.value))} type="checkbox"/>
                {
                    !editActive ? (
                        <label style={completed ? {textDecorationLine: 'line-through', textDecorationThickness: '3px'}: {}}>{text}</label>
                     ) : (
                        <input value={text} onChange={(event) => dispatch(editTodo(id, event.target.value))} className={styles.input_text} type="text"/>
                    )
                }
                <div>
                    <button type='submit' className={styles.edit} onClick={editClickHandler}>Edit</button> 
                    <button type="submit" className={styles.delete} onClick={deleteTodoHandler}>Delete</button>
                </div>
            </li>
        </>
    )
}