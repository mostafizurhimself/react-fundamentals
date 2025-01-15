import { FC, use, useEffect, useMemo, useState } from "react";
import Input from "./input";

type TodoListProps = {};

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: FC<TodoListProps> = ({}) => {
  const [newTodo, setNewTodo] = useState("");

  const [search, setSearch] = useState("");

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn TypeScript", completed: true },
    { id: 3, text: "Learn GraphQL", completed: false },
    { id: 4, text: "Learn Node.js", completed: false },
    { id: 5, text: "Learn Next.js", completed: false },
    { id: 6, text: "Learn Tailwind CSS", completed: false },
    { id: 7, text: "Learn CSS-in-JS", completed: false },
    { id: 8, text: "Learn Redux", completed: false },
  ]);

  const filteredTodos = useMemo(() => {
    console.log("Filtering todos");
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  // const uncompletedTodos = todos.filter((todo) => !todo.completed);

  // Avoid this pattern
  // useEffect(() => {
  //   setTodos(prev => prev.filter(todo => !todo.completed));
  // }, [todos]);

  return (
    <div>
      <h1 className="font-semibold text-lg mb-2">Todo List</h1>

      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-col gap-2 mt-4">
        <Input
          placeholder="Add New ToDo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button
          onClick={() => {
            setTodos((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                text: newTodo,
                completed: false,
              },
            ]);
            setNewTodo("");
          }}
          className="btn btn-primary mt-2"
        >
          Add Todo
        </button>
      </div>

      <ul className="mt-4">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              onChange={(e) => {
                setTodos((prev) =>
                  prev.map((t) => {
                    if (t.id === todo.id) {
                      return {
                        ...t,
                        completed: e.target.checked,
                      };
                    }
                    return t;
                  })
                );
              }}
              type="checkbox"
              checked={todo.completed}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
