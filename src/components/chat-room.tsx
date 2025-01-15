import { FC, useEffect } from "react";

type ChatRoomProps = {};

const createConnection = () => {
  return {
    connect: () => {
      console.log("Connecting...");
    },

    disconnect: () => {
      console.log("Disconnecting...");
    },
  };
};

const ChatRoom: FC<ChatRoomProps> = ({}) => {
  useEffect(() => {
    const connection = createConnection();

    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Chat Room</h1>
      <textarea className="border border-gray-300 p-2 rounded text-sm w-64 h-32" />
    </div>
  );
};

export default ChatRoom;
