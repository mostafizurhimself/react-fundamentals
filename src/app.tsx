import { useState } from "react";
import ChatRoom from "./components/chat-room";
import Dialog from "./components/dialog";

export default function App() {
  // const [isPlaying, setIsPlaying] = useState(false);

  const [showChat, setShowChat] = useState(false);

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

      <Dialog />
    </div>
  );
}
