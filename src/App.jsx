import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    fetch("https://mern-backend-xlt8.onrender.com/api/hello")
    // fetch("http://127.0.0.1:8000/api/hello")
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => setMessage(data.message))
    .catch((err) => setMessage("Error: " + err.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
    </div>
  );
}

export default App;