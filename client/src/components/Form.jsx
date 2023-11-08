import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: false,
  });

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form>
      <input name="author" placeholder="author" />
      <input name="title" placeholder="title" />
      <input name="status" type="checkbox" />
      Form
    </form>
  );
}
