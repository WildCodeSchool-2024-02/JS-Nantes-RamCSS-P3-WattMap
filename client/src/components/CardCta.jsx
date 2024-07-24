import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import "../styles/cardCta.css";

export default function CardCta({
  urlCard,
  cardLight,
  imageUrl = "sample.jpg",
  title,
  description,
  iconButton,
  labelButton,
}) {
  return (
    <article className={`card card-cta${cardLight ? " card-cta-light" : ""}`}>
      <figure className="rounded-img">
        <img
          className="imgCard"
          src={`${import.meta.env.VITE_API_URL}/assets/images/${imageUrl}`}
          alt={title}
        />
      </figure>

      <h3 className="title-card">{title}</h3>

      <p>{description}</p>
      <p>
        <Link
          to={urlCard}
          className={`btn btn-absolute ${cardLight ? "btn-black" : "btn-default"}`}
        >
          <Icons choiceIcon={iconButton} /> <span>{labelButton}</span>
        </Link>
      </p>
    </article>
  );
}
// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
CardCta.propTypes = {
  urlCard: PropTypes.string.isRequired,
  cardLight: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconButton: PropTypes.string.isRequired,
  labelButton: PropTypes.string.isRequired,
};
