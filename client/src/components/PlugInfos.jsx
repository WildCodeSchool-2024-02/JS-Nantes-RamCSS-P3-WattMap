import PropTypes from "prop-types";
import PlugStatus from "./PlugStatus";
import Icons from "./Icons";
import "../styles/plugInfos.css";

export default function PlugInfos({ plugType }) {
  // WARNING : make sure .env is created to see the image appear

  return (
    <figure
      className="plug-infos active"
      role="figure"
      aria-label={`Prise ${plugType.type} Puissance ${plugType.type}`}
    >
      <Icons choiceIcon={plugType.type} />
      <figcaption>
        <span className="visually-hidden">Prise {plugType.type} puissance</span>{" "}
        {plugType.type}
        <PlugStatus />
      </figcaption>
    </figure>
  );
}

PlugInfos.propTypes = {
  plugType: PropTypes.shape({
    type: PropTypes.string,
    imgUrl: PropTypes.string,
    maxPower: PropTypes.number,
  }).isRequired,
};
