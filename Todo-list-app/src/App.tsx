import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoListCard from "./components/TodoListCard";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <React.Fragment>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoListCard
          todoList={todoList}
          setTodoList={setTodoList}
          // CompletedTodos={CompletedTodos}
          // setCompletedTodos={setCompletedTodos}
        />
      </div>
    </React.Fragment>
  );
};
export default App;
