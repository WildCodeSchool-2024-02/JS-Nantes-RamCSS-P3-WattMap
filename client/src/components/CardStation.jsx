export default function CardStation() {
  return (
    <article className="card">
      <header className="vertical-center">
        <figure className="rounded-img">
          <img src="../src/assets/image-test.jpg" alt="test" />
        </figure>
        <div>
          <h3>Titre</h3>
          <address>
            7 rue du chateau <br />
            44000 Nantes
          </address>
          <time dateTime="2023-07-07">07-07-2023</time>
          <div>
            <button type="button" className="btn btn-contour">
              Catégorie
            </button>
          </div>
        </div>
      </header>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </main>
    </article>
  );
}
