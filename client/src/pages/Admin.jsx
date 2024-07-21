import { useRef, useState } from "react";
import ButtonTab from "../components/ButtonTab";

export default function Admin() {
    const sectionAdmin1Ref = useRef(null);
    const sectionAdmin2Ref = useRef(null);
    const sectionAdmin3Ref = useRef(null);

    const [activeTab, setActiveTab] = useState(sectionAdmin1Ref);
    // console.log('%c⧭ activeTab', 'color: #733d00', activeTab);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>

            <section className="container">
                <div className="container">
                    <table>
                        <thead>Nom</thead>
                    </table>
                    {activeTab === sectionAdmin1Ref && "Utilisateurs"}
                    {activeTab === sectionAdmin2Ref && "Véhicules"}
                    {activeTab === sectionAdmin3Ref && "Bornes"}

                </div>
            </section>
            <menu className="tab-container">
                <ButtonTab
                    classCustom={activeTab === sectionAdmin1Ref ? "active" : ""}
                    sectionAdminRef={sectionAdmin1Ref}
                    label="Utilisateurs"
                    handleTabClick={handleTabClick}
                    icon='user'
                />
                <ButtonTab
                    classCustom={activeTab === sectionAdmin2Ref ? "active" : ""}
                    sectionAdminRef={sectionAdmin2Ref}
                    label="Véhicules"
                    handleTabClick={handleTabClick}
                    icon='car'
                />
                <ButtonTab
                    classCustom={activeTab === sectionAdmin3Ref ? "active" : ""}
                    sectionAdminRef={sectionAdmin3Ref}
                    label="Bornes"
                    handleTabClick={handleTabClick}
                    icon='flash'
                />
            </menu>

        </>
    )

}