import { useState } from "react";

import { TodoItem } from "@/components/TodoItem";
import { TodoGet } from "@/components/TodoGet";
import { AddForm } from "@/components/AddForm";

export default function Home() {
  const [todolist, setTodolist] = useState([]);
  const [action, setAction] = useState(null);

  return (
    <main>
      <AddForm setAction={setAction}/>
      <TodoGet setTodolist={setTodolist} action={action} />
      <TodoItem todolist={todolist} setAction={setAction} />
    </main>
  );
}