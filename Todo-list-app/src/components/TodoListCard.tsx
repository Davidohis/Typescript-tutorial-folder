import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoListCard({ todoList, setTodoList }: Props) {
  return (
    <div className="todos">
      {todoList.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
