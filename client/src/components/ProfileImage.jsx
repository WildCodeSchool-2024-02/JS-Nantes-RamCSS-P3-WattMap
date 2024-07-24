import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/profileImage.css";

export default function ProfileImage({isEditable=false, imgUrl, icon }) {

  return (
      <figure
        className={`profile-image ${isEditable? "edit-profile-image" : ""} `}
      >
          {imgUrl ? (
            <img
              src={`${import.meta.env.VITE_API_URL}${imgUrl}`}
              alt="votre avatar"
            />
          ) : (
            <>
              <Icons choiceIcon={icon} />
              <figcaption className="visually-hidden">
                Avatar par défaut
              </figcaption>
            </>
          )}
      </figure>
  );
}
// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
ProfileImage.propTypes = {
  imgUrl: PropTypes.string,
  isEditable: PropTypes.bool,
  icon: PropTypes.string
};
