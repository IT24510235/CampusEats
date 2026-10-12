import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function App() {
  const [menu, setMenu] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`${API}/api/menu`)
      .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then((data) => { setMenu(data); setStatus("ok"); })
      .catch((e) => setStatus("error: " + e.message));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 500, margin: "40px auto" }}>
      <h1>CampusEats Menu</h1>
      <p>API: <code>{API}</code> | Status: <b>{status}</b></p>
      <ul>
        {menu.map((m) => (
          <li key={m.id}>
            {m.name} - Rs. {m.price} ({m.category})
          </li>
        ))}
      </ul>
    </div>
  );
}