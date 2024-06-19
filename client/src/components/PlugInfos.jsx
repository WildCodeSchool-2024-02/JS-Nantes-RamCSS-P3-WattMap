import PlugStatus from "./PlugStatus";

export default function PlugDetails() {
  return (
    <figure role="figure" aria-label="Prise Chademo Puissance 22Kw">
      <figcaption>
        <span className="visually-hidden">Prise Chademo puissance</span>22Kw
      </figcaption>
      <img src="" alt="Chademo" />
      <PlugStatus />
    </figure>
  );
}
