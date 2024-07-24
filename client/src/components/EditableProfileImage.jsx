import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import "../styles/profileImage.css";
import "../styles/modal.css";
import ProfileImage from "./ProfileImage";

export default function EditableProfileImage({ imgUrl }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal} className='profile-image-button' aria-label="modifier ma photo de profil">
        <ProfileImage isEditable imgUrl={imgUrl} icon="user" />
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}
// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
EditableProfileImage.propTypes = {
  imgUrl: PropTypes.string,
};
