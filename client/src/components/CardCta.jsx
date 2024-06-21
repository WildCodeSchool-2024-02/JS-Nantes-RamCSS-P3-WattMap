export default function CardCta() {
  return (
    <article className="card">
      <header>
        <figure className="rounded-img">
          <img
            className="imgCard"
            src="../src/assets/image-test.jpg"
            alt="test"
          />
        </figure>
        <div>
          <h3>Titre</h3>
        </div>
      </header>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          <a href="components" className="btn btn-default">
            Button
          </a>
        </p>
      </main>
    </article>
  );
}
