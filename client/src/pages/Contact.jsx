import { useState } from "react";
import "../styles/contact.css";
import Input from "../components/Input";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subject: "demande_information",
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
    // TODO add fetch method
    // eslint-disable-next-line no-console
    console.log("coucou", formData);

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "information-request",
    });
  };

  return (
    <main>
      <div className="container">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="subject">Sujet de la demande:</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
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

          <p>Message</p>
          <textarea
            name="message"
            className="message-contact"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button type="submit" className="button-contact">
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
}
