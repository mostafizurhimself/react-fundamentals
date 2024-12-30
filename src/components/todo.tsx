import React, { useReducer, useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { useImmerReducer } from "use-immer";

// const useCustomReducer = (reducer, initialState) => {
//   const [state, setState] = useState(initialState);
//   const dispatch = (action) => {
//     // setState(reducer(state, action));

//     const newState = reducer(state, action);
//     setState(newState);
//   };

//   return [state, dispatch];
// };

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  // const [todos, dispatch] = useReducer(
  //   function (prev: Todo[], action: { type: string; payload: Todo }) {
  //     if (action.type === "ADD") {
  //       return [...prev, action.payload];
  //       // prev.push(action.payload);
  //     }

  //     if (action.type === "REMOVE") {
  //       return prev.filter((todo) => todo.id !== action.payload.id);
  //     }

  //     if (action.type === "TOGGLE") {
  //       return prev.map((todo) => {
  //         return todo.id === action.payload.id
  //           ? { ...todo, completed: !todo.completed }
  //           : todo;
  //       });
  //     }

  //     if (action.type === "EDIT") {
  //       return prev.map((todo) => {
  //         return todo.id === action.payload.id
  //           ? { ...todo, text: action.payload.text }
  //           : todo;
  //       });
  //     }

  //     return prev;
  //   },
  //   [
  //     { id: 1, text: "Learn React", completed: false },
  //     { id: 2, text: "Build a Todo App", completed: false },
  //   ]
  // );

  const [todos, dispatch] = useImmerReducer(
    function (prev: Todo[], action: { type: string; payload: Todo }) {
      if (action.type === "ADD") {
        prev.push(action.payload);
      }

      if (action.type === "REMOVE") {
        prev.splice(
          prev.findIndex((todo) => todo.id === action.payload.id),
          1
        );
      }

      if (action.type === "TOGGLE") {
        const index = prev.findIndex((todo) => todo.id === action.payload.id);

        prev[index].completed = !prev[index].completed;
      }

      if (action.type === "EDIT") {
        const index = prev.findIndex((todo) => todo.id === action.payload.id);

        prev[index].text = action.payload.text;
      }

      return prev;
    },
    [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a Todo App", completed: false },
    ]
  );

  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTodo = (): void => {
    dispatch({
      type: "ADD",
      payload: { id: Date.now(), text: newTodo, completed: false },
    });
    setNewTodo("");
  };

  const removeTodo = (todo: Todo): void => {
    dispatch({ type: "REMOVE", payload: todo });
  };

  const toggleComplete = (todo: Todo): void => {
    dispatch({ type: "TOGGLE", payload: todo });
  };

  const startEditing = (todo: Todo): void => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (): void => {
    dispatch({
      type: "EDIT",
      payload: { id: Number(editingId), text: editText, completed: false },
    });
    setEditingId(null);
  };

  return (
    <div className="max-w-lg w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex mb-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2"
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          onClick={addTodo}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-gray-50 hover:bg-gray-900/90 h-10 px-4 py-2"
        >
          Add
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center bg-gray-100 p-2 mb-2 rounded"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo)}
              className="mr-2"
            />

            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2"
                />
                <button
                  onClick={saveEdit}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-10 w-10"
                >
                  <FaCheck className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                {/* ToDo Text */}
                <span
                  className={`flex-grow ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>

                {/* Edit Button */}
                <button
                  onClick={() => startEditing(todo)}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-10 w-10 mr-2"
                >
                  <FaEdit className="h-4 w-4" />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => removeTodo(todo)}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-gray-50 hover:bg-red-500/90 h-10 w-10"
                >
                  <FaTrash className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
