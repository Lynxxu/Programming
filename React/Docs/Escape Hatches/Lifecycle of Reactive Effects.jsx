import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log("connecting to " + roomId + " room at " + serverUrl + "...");
    },
    disconnect() {
      console.log(
        "disconnected from " + roomId + " room at " + serverUrl + "..."
      );
    },
  };
}

function ChatRoom({ roomId }) {
  const serverUrl = "https://lynx1027.com";

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "close chat" : "open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

const app = createRoot(document.getElementById("app"));
app.render(<App />);
