import { useState } from 'react';
import styles from '../styles/addform.module.css';

export function AddForm({ setAction }) {
    const
        [todonew, setTodonew] = useState(null);

    const Submit = () => {
        setAction({ type: "add", todonew });
    };

    return (
        <div className={styles.form}>
            <label>new todo:<input
                type="text"
                onChange={(e) => { setTodonew(e.target.value) }} 
                placeholder='Введите текст'
                />
            </label>

            <button onClick={Submit}>Добавить</button>
        </div>
    );
};