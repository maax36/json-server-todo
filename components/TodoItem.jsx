import styles from '../styles/usercard.module.css';

export function TodoItem({ todolist, setAction }) {
    return (
        <>
            {todolist.toReversed().map((user) => {
                const { id, todonew } = user;

                return (
                    <fieldset className={styles.userCard} key={id}>
                        <legend>Todo: </legend>
                        <div 
                            className={styles.delete}
                            onClick={() => setAction({ type: "del", id })}
                        >
                            [X]
                        </div>

                        <div><span>{todonew}</span></div>
                    </fieldset>
                );
            })}
        </>
    );
}