import { NavLink } from "react-router-dom";

export default function CardNews() {
  return (
    <article className="card card-news">
      <NavLink to="/map">
        <header className="d-flex align-items-center">
          <figure className="rounded-img">
            <img
              className="imgCard"
              src="../src/assets/image-test.jpg"
              alt="test"
            />
          </figure>
          <div className="infos-card">
            <h3 className="title-card">Titre</h3>
            <time dateTime="2023-07-07">07-07-2023</time>
            <div className="tag-buttons">
              <button type="button" className="btn btn-contour btn-small">
                Catégorie
              </button>
            </div>
          </div>
        </header>
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </main>
      </NavLink>
    </article>

  );
}
