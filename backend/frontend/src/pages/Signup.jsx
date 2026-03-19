import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );

      alert("Signup success ✅");
      console.log(res.data);

    } catch (err) {
      alert("Signup failed ❌");
      console.log(err.response?.data);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Signup</h2>

      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
        <input name="password" placeholder="Password" onChange={handleChange} /><br/><br/>
        <button>Signup</button>
      </form>
    </div>
  );
}
