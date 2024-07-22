import { useEffect, useRef, useState } from "react";
import ButtonTab from "../components/ButtonTab";
import TableStats from "../components/TableStats";

export default function Admin() {
    const sectionAdmin1Ref = useRef("users");
    const sectionAdmin2Ref = useRef("vehicles");
    const sectionAdmin3Ref = useRef("plugtypes");

    const [activeTab, setActiveTab] = useState("users");
    const [columns, setColumns] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${activeTab}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify(dataTable),
                credentials: 'include'

            });
            const data = await response.json();
            // console.log('%c⧭ dataTable table', 'color: #00bf00', dataTable);

            if (data.length > 0) {
                setColumns(Object.keys(dataTable[0]));
                setDataTable(dataTable);
            }
        };
        fetchData();
    }, [activeTab]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
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
                    {dataTable.length > 0 ? <TableStats columns={columns} dataTable={dataTable} /> : <p>Loading...</p>}

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