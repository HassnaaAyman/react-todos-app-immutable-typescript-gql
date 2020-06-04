import React  from "react";
import { List } from "immutable";
import Todo from "../components/todoItem";

const { useState, useCallback } = React;

const Todos = () => {
  const [todos, setTodos] = useState<List<string>>(List([]));
  const [input, setInput] = useState<string>("");

  const memoizedInput = useCallback((value) => setInput(value), [setInput]);

  const addTodo = useCallback(() => {
    setTodos((oldState) => oldState.push(input));
    setInput("");
  }, [setTodos, input]);

  return (
    <>
      <div className="todos">
      <h4>Todos</h4>
        <input
          type="text"
          value={input}
          onChange={(e) => memoizedInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>

        {todos.isEmpty() ? null : (
          <>
            {todos.map(
              (item, index) => item && <Todo item={item} key={index} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Todos;
