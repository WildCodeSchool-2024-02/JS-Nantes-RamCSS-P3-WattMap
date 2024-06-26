// import { useState } from "react";
import "../styles/contact.css";
import Input from "../components/Input";

export default function Contact() {


return(
<main>
  <div className="container">
    <h1>Contact</h1>
    <p>Prénom<Input type="text" labelText="Prénom: " /></p>
    <p>Nom<Input type="text" labelText="Nom: " /></p>
    <p>Email<Input type="email" labelText="Email: " /></p>
    <p>Message<Input type="text" labelText="Message: " /></p>
    
    
  </div>
</main>
)
}
