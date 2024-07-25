import { useState } from "react";
import "../styles/form.css";
import Input from "../components/Input";
import Footer from "../components/Footer";

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

  return (<>
    <main className="container">
      <h1>Contact</h1>
      <section className="form-container container-outline">

      <form onSubmit={handleSubmit} className="form">
        <label className="input-label" htmlFor="subject">
          Sujet de la demande:
       
        <select className="form-select" name="subject" onChange={handleChange}>
          <option value="information-request">Demande d'information</option>
          <option value="partnership-request">Demande de partenariat</option>
          <option value="feedback">Feedback / Suggestions</option>
          <option value="technical-support">
            Demande de support technique
          </option>
          <option value="other">Autre</option>
          </select>
        </label>

        <Input
          type="text"
          labelText="Prénom "
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <Input
          type="text"
          labelText="Nom "
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          labelText="Email "
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="input-label" htmlFor="formTextareaContact">
          Message
       
        <textarea
          name="message"
          id="formTextareaContact"
          className="form-input"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          />
        </label>
        <button type="submit" className="btn btn-default mt-3">
          Envoyer
        </button>
        </form>
        </section>
    </main>
    <Footer />
    </>
  );
}
