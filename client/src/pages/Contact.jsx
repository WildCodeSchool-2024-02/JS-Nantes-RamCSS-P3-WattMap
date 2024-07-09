import { useState } from "react";
import "../styles/form.css";
import Input from "../components/Input";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // Update the formData report
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="form gap-1">
        <label className="form-input-label" htmlFor="subject">
          Sujet de la demande:
        </label>
        <select className="form-select" name="subject" onChange={handleChange}>
          <option value="information-request">Demande d'information</option>
          <option value="partnership-request">Demande de partenariat</option>
          <option value="feedback">Feedback / Suggestions</option>
          <option value="technical-support">
            Demande de support technique
          </option>
          <option value="other">Autre</option>
        </select>

        <Input
          type="text"
          labelText="Prénom "
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Nicolas"
        />

        <Input
          type="text"
          labelText="Nom "
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Sarkozy"
        />

        <Input
          type="email"
          labelText="Email "
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="monemail@gmail.com"
        />

        <label className="form-input-label" htmlFor="formTextareaContact">
          Message
        </label>
        <textarea
          name="message"
          id="formTextareaContact"
          className="form-input"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          placeholder="Dites-nous en un peu plus !"
        />
        <button type="submit" className="btn-form btn btn-default mt-3">
          Envoyer
        </button>
      </form>
    </main>
  );
}
