import { useState } from "react";
import API from "../api";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await API.post("/contact", form);
    alert("Message sent successfully!");
    setForm({ name:"", email:"", message:"" });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={submit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
        <button>Send</button>
      </form>
    </section>
  );
}