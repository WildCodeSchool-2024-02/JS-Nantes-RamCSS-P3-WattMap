import { useRef, useState } from "react";
import ButtonTab from "../components/ButtonTab";

export default function Admin() {
    const sectionAdmin1Ref = useRef(null);
    const sectionAdmin2Ref = useRef(null);
    const sectionAdmin3Ref = useRef(null);

    const [activeTab, setActiveTab] = useState('Accueil');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>

            <section ref={sectionAdmin1Ref} className="container section-home">
                <div className="container">
                    {activeTab === sectionAdmin1Ref && "Utilisateurs"}
                    {activeTab === sectionAdmin2Ref && "Véhicules"}
                    {activeTab === sectionAdmin3Ref && "Bornes"}

                </div>
            </section>
            <ButtonTab
                sectionRef={sectionAdmin1Ref}
                label="Utilisateurs"
                handleTabClick={handleTabClick}
                icon='user'
            />
            <ButtonTab
                sectionRef={sectionAdmin1Ref}
                label="Véhicules"
                handleTabClick={handleTabClick}
                icon='car'
            />
            <ButtonTab
                sectionRef={sectionAdmin1Ref}
                label="Bornes"
                handleTabClick={handleTabClick}
                icon='flash'
            />


        </>
    )

}