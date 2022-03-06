import React from "react"
import { useAppSelector } from "../../hooks";
import { iTodos } from "../../types/types";
import { Todo } from "../TodoList/Todo/Todo"
import styles from './Completed.module.scss'

export const Completed = () => {
    const todoList:iTodos[] = useAppSelector(state => state.todos);

    return (
        <div className={styles.root}>
            <h3>Completed</h3>
            <ul className={styles.completed_tasks}>
               {todoList.map((item:iTodos) => {
                    if (item.completed) 
                    return (
                        <Todo key={item.id} id={item.id} text={item.text} completed={item.completed}/>  
                    )
                })}
            </ul>
        </div>
    )
}