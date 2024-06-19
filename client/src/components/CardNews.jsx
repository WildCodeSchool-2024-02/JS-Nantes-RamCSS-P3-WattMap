export default function CardNews() {
  return (
    <article className="card">
      <header className="vertical-center">
        <figure className="rounded-img">
          <img
            className="imgCard"
            src="../src/assets/image-test.jpg"
            alt="test"
          />
        </figure>
        <div>
          <h3>Titre</h3>
          <time dateTime="2023-07-07">07-07-2023</time>
          <div className="tag-buttons">
            <button type="button" className="btn-contour">
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
