import { useState, useEffect } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}

const app = createRoot(document.getElementById("app"));
app.render(<App />);

function createConnection({ serverUrl, roomId }) {
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
  const [serverUrl, setServerUrl] = useState("https://somewebsite");
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>
        Welcome to the {roomId} room! (connected in {serverUrl})
      </h1>
    </>
  );
}

function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}

function ChatRoomViaHook({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://somewebsite");

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
  });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>
        Welcome to the {roomId} room! (connected in {serverUrl})
      </h1>
    </>
  );
}

const chat = createRoot(document.getElementById("chat"));
chat.render(<ChatRoomViaHook />);
