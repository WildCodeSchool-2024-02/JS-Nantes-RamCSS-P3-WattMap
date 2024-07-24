import { useEffect, useRef, useState } from "react";
// import { useAuth } from "../contexts/AuthProvider";
// import { NavLink } from "react-router-dom";
import ButtonTab from "../components/ButtonTab";
import TableStats from "../components/TableStats";
import UploadFileAdmin from "../components/UploadFileAdmin";
// import Icons from "../components/Icons";

export default function Admin() {
    // context connected admin
    // const { isAdmin } = useAuth();
    // if (isAdmin) {

    // ref for tabs
    // users/all is defined by default to fecth specific route
    const sectionAdmin1Ref = useRef("users/all");
    const sectionAdmin2Ref = useRef("vehicles");
    const sectionAdmin3Ref = useRef("plugtypes");
    const sectionAdmin4Ref = useRef("csv");

    /// add specific caption table
    const [captionTable, setCaptionTable] = useState("Utilisateurs");
    // select active tab
    const [activeTab, setActiveTab] = useState("users/all");
    // get data
    const [columns, setColumns] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        // trigger fetch except for specific value 
        if (activeTab !== sectionAdmin4Ref.current) {
            const fetchData = async () => {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${activeTab}`, { credentials: 'include' });
                const data = await response.json();

                if (data.length > 0) {
                    setColumns(Object.keys(data[0]));
                    setDataTable(data);
                }
            };
            fetchData();
        }
    }, [activeTab]);

    const handleTabClick = (tabIndex, label) => {
        setActiveTab(tabIndex);
        setCaptionTable(label);
    };



    return (
        <main className="container container-fullscreen">
            <h1>Gestion Admin</h1>

            <section className="main-container">
                {activeTab !== sectionAdmin4Ref.current ? <TableStats caption={captionTable} columns={columns} dataTable={dataTable} /> : <UploadFileAdmin />}
            </section>
            <menu className="tab-container">
                <ButtonTab
                    classCustom={activeTab === sectionAdmin1Ref.current ? "active" : ""}
                    sectionAdminRef={sectionAdmin1Ref.current}
                    label="Utilisateurs"
                    handleTabClick={handleTabClick}
                    icon='user'
                />
                <ButtonTab
                    classCustom={activeTab === sectionAdmin2Ref.current ? "active" : ""}
                    sectionAdminRef={sectionAdmin2Ref.current}
                    label="Véhicules"
                    handleTabClick={handleTabClick}
                    icon='car'
                />
                <ButtonTab
                    classCustom={activeTab === sectionAdmin3Ref.current ? "active" : ""}
                    sectionAdminRef={sectionAdmin3Ref.current}
                    label="Bornes"
                    handleTabClick={handleTabClick}
                    icon='flash'
                />
                <ButtonTab
                    classCustom={activeTab === sectionAdmin4Ref.current ? "active" : ""}
                    sectionAdminRef={sectionAdmin4Ref.current}
                    label="Téléverser"
                    handleTabClick={handleTabClick}
                    icon='upload'
                />
            </menu>
        </main>
    )
    // } else {
    //     return (
    //         <>
    //             <h1>Vous êtes adsministrateur</h1>
    //         <NavLink className='btn btn-default btn-icone' to="/login">
    //             <Icons choiceIcon="user" />
    //             Se connecter
    //         </NavLink>
    //         </>
    //     )
    // }
}