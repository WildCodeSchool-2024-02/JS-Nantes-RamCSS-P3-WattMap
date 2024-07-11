import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";
import Modal from "./Modal";
import "../styles/profileImage.css"
import "../styles/modal.css"


export default function ProfileImage({ displayMode = 0, }) {

    // displayMode is a prop that was introduced in order to change the apparence of some elements inside of the component
    // 0 : avatar with default icon user
    // 1 : avatar wrap inside button with icon or custom image user

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')
        }
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // component under development
    // awaiting the possibility of adding a personalized image to the database

    // const [isProfileImageCustom, SetIsProfileImageCustom] = useState();

    /* <figure className={`profile-image${isProfileImageCustom ? ' custom-profile-image' : ''}`}>
                <button type="button" onClick={openModal}>
                    {isProfileImageCustom ? < img src="" alt="" /> : <Icons choiceIcon="user" />}
                    <figcaption className="visually-hidden">{isProfileImageCustom ? "Avatar par défaut" : "Nom perso"}</figcaption>
                </button>
            </figure> */
    return (
        <>
            <figure className="profile-image">
                {displayMode === 0 && (
                    <>
                        <Icons choiceIcon="user" />
                        <figcaption className="visually-hidden">Avatar par défaut</figcaption>
                    </>
                )}
                {displayMode === 1 && (
                    <button type="button" onClick={openModal}>
                        <Icons choiceIcon="user" />
                        <figcaption className="visually-hidden">Avatar par défaut</figcaption>
                    </button>
                )}
            </figure>

            {isModalOpen && (<Modal closeModal={closeModal} />)}
        </>
    )
}
// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
ProfileImage.propTypes = {
    displayMode: PropTypes.number,
};
