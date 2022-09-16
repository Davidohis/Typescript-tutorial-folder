import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function SingleTodo({ todo, todoList, setTodoList }: Props) {
  return (
    <form
      //   onSubmit={(e) => handleEdit(e, todo.id)}
      //   {...provided.draggableProps}
      //   {...provided.dragHandleProps}
      //   ref={provided.innerRef}
      className={`todos__single`}
    >
      {/* {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )} */}
      <div>
        <span
          className="icon"
          //   onClick={() => {
          //     if (!edit && !todo.isDone) {
          //       setEdit(!edit);
          //     }
          //   }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          //   onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          //   onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
}
