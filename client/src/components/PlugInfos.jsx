import PlugStatus from "./PlugStatus";

export default function PlugDetails() {
  // WARNING : make sure .env is created to see the image appear
  // TODO : the fixed part of the URL need to become dynamic via props.
  const imgUrl = import.meta.env.VITE_API_URL.concat(
    "",
    "/assets/images/plugTypeIcons/chademo.svg"
  );

  return (
    <figure role="figure" aria-label="Prise Chademo Puissance 22Kw">
      <figcaption>
        <span className="visually-hidden">Prise Chademo puissance</span>22Kw
      </figcaption>
      <img src={imgUrl} alt="Chademo" />
      <PlugStatus />
    </figure>
  );
}
