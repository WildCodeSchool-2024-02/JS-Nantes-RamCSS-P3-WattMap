import { useEffect, useState } from "react";
import Icons from "./Icons";
import Modal from "./Modal";
import "../styles/profileImage.css"
import "../styles/modal.css"


export default function ProfileImage() {
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
                <button type="button" onClick={openModal}>
                    <Icons choiceIcon="user" />
                    <figcaption className="visually-hidden">Avatar par défaut</figcaption>
                </button>
            </figure>

            {isModalOpen && (<Modal closeModal={closeModal} />)}
        </>
    )
}
