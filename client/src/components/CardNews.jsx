import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardNews({title, imageUrl, content }) {
  return (
    <article className="card card-news">
      <NavLink to="/map">
        <header>
          <figure className="rounded-img">
            <img
              className="imgCard"
              src={imageUrl}
              alt="test"
            />
          </figure>
          <div className="infos-card">
            <h3 className="title-card">{title}</h3>
            <time dateTime="2023-07-07">24-07-2027</time>
            <div className="tag-buttons">
              <button type="button" className="btn btn-contour btn-small">
                Catégorie
              </button>
            </div>
          </div>
        </header>
        <main>
          <p> {content}</p>
        </main>
      </NavLink>
    </article>

  );
}
