import { Link } from "react-router-dom";
import "../styles/cardCta.css";

export default function CardCta() {
  return (
    <article className="card card-cta">

      <figure className="rounded-img">
        <img
          className="imgCard"
          src="../src/assets/image-test.jpg"
          alt="test"
        />
      </figure>

      <h2 className="title-card">Titre</h2>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>
        <Link to="components" className="btn btn-contour btn-absolute">Button</Link>
      </p>

    </article>
  );
}
