import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/vehicleImage.css";

export default function VehicleImage({ imgUrl }) {
  return (
    <div className="vehicle-image">
      {imgUrl ? <img src={imgUrl} alt="" /> : <Icons choiceIcon="car" />}
    </div>
  );
}

VehicleImage.propTypes = {
  imgUrl: PropTypes.string,
};

VehicleImage.defaultProps = {
  imgUrl: 'http://www.w3.org/2000/svg',
};

