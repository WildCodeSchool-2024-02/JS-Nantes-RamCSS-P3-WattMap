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
        <a href="components" className="btn btn-default btn-absolute">
          Button
        </a>
      </p>

    </article>
  );
}
