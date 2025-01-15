import { useState } from "react";
import ChatRoom from "./components/chat-room";
import Dialog from "./components/dialog";
import TodoList from "./components/todo-list";
import UserForm from "./components/user-form";
import ProfilePage from "./components/profile-page";
import DependentDropdown from "./components/dependent-dropdown";

// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//   },
//   {
//     id: 3,
//     name: "Alice",
//   },
//   {
//     id: 4,
//     name: "Bob",
//   },
//   {
//     id: 5,
//     name: "Charlie",
//   },
// ];

export default function App() {
  // const [currentUser, setCurrentUser] = useState<number>(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const [showChat, setShowChat] = useState(false);

  // const [text, setText] = useState("");

  // const handlePlay = () => {
  //   setIsPlaying((prev) => !prev);
  // };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-2 max-w-sm mx-auto">
      {/* <button onClick={handlePlay} className="btn btn-primary">
        {isPlaying ? "Pause" : "Play"}
      </button>

      {isPlaying && (
        <Input value={text} onChange={(e) => setText(e.target.value)} />
      )}

      <VideoPlayer isPlaying={isPlaying} /> */}
      {/* <Input value={text} onChange={(e) => setText(e.target.value)} /> */}

      {/* <button
        onClick={() => setShowChat((prev) => !prev)}
        className="btn btn-primary"
      >
        {showChat ? "Hide Chat" : "Show Chat"}
      </button>
      {showChat && <ChatRoom />} */}

      {/* <Dialog /> */}

      {/* <TodoList /> */}

      {/* <UserForm /> */}

      {/* <select
        value={currentUser}
        onChange={(e) => setCurrentUser(Number(e.target.value))}
        className="border border-gray-300 p-2 rounded text-sm w-64"
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <ProfilePage key={currentUser} /> */}

      <DependentDropdown />
    </div>
  );
}
