import { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post("http://localhost:5000/api/tasks", {
      title,
      description: "demo",
      createdBy: "user"
    });
    setTitle("");
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>Tasks</h2>

      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map(t => (
        <div key={t._id}>{t.title}</div>
      ))}
    </div>
  );
}
{tasks.map(t => (
  <div key={t._id}>
    {t.title}
    <button onClick={async () => {
      await axios.delete(`http://localhost:5000/api/tasks/${t._id}`);
      load();
    }}>
      Delete
    </button>
  </div>
))}
