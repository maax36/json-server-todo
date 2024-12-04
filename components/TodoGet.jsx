import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function TodoGet({ setTodolist, action }) {
    const { data, error, isLoading, mutate } = useSWR("http://localhost:3333/todo", fetcher);

    useEffect(() => {
        if (data) {
            setTodolist(data);
        }
    }, [data, setTodolist]);

    useEffect(() => {
        const Action = async () => {
            if (!action?.type) return;

            let
                link = "",
                method = "",
                body = "";

            switch (action.type) {
                case "del":
                    link = `http://localhost:3333/todo/${action.id}`;
                    method = "DELETE";
                    break;
                case "add":
                    link = `http://localhost:3333/todo`;
                    method = "POST";
                    body = JSON.stringify({
                        todonew: action.todonew
                    });
                    break;
                default:
                    console.log(`Unknown action type: ${action.type}`);
                    return;
            }

            try {
                await fetch(link, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body,
                });

                mutate();
            } catch (err) {
                console.error("Failed to perform action", err);
            }
        };

        Action();
    }, [action, mutate]);

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";

    return null;
}
