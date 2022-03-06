import React, { ChangeEvent, useState, MouseEvent } from "react";
import { sleep } from "../../helpers/helpers";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../redux/actions/actions";
import styles from './AddTodos.module.scss';

export const AddTodos = () => {
    const [todosText, setTodosText] = useState<string>('');
    const dispatch = useAppDispatch();
        

    const getTodosTextHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTodosText(e.target.value)
    }

    const addTodosTextHandler = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        await sleep()
        dispatch(addTodo(todosText))
        setTodosText('')
    }
    return (
        <>
            <form className={styles.root_label}>
                <label htmlFor="new-task">Add Item</label>
                <input id="new-task" value={todosText} onChange={(e) => getTodosTextHandler(e)} type="text"/>
                <button type="submit" onClick={addTodosTextHandler}>Add</button>
            </form>
        </>
    )
}