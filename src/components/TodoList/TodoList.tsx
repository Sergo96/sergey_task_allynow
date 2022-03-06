import React from "react";
import { useAppSelector } from "../../hooks";
import { iTodos } from "../../types/types";
import { Todo } from "./Todo/Todo";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
    const todoList:iTodos[] = useAppSelector(state => state.todos);
         
    return (
        <div className={styles.root}>
            <h3>Todo</h3>
            <ul className={styles.incomplete_tasks}>
                {todoList.map((item:iTodos) => {
                    if (!item.completed) 
                    return (
                        <Todo key={item.id} id={item.id} text={item.text} completed={item.completed}/>  
                    )
                })}
            </ul>  
        </div>
    )
}