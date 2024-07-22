import { useEffect, useRef, useState } from "react";
import ButtonTab from "../components/ButtonTab";
import TableStats from "../components/TableStats";

export default function Admin() {
    const sectionAdmin1Ref = useRef("users/all");
    // console.log('%c⧭', 'color: #917399', typeof (sectionAdmin1Ref));
    // console.log('%c⧭', 'color: #917399', sectionAdmin1Ref);
    const sectionAdmin2Ref = useRef("vehicles");
    const sectionAdmin3Ref = useRef("plugtypes");

    const [activeTab, setActiveTab] = useState("users/all");
    // console.log('%c⧭ activeTab', 'color: #d90000', activeTab);

    const [columns, setColumns] = useState([]);
    // console.log('%c⧭ columns', 'color: #00b300', columns);

    const [dataTable, setDataTable] = useState([]);
    // console.log('%c⧭ dataTable', 'color: #ffa640', dataTable);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${activeTab}`, { credentials: 'include' });
            // console.log('%c⧭ response', 'color: #1d5673', response);

            const data = await response.json();
            // console.log('%c⧭ data', 'color: #f200e2', typeof (data));
            // console.log('%c⧭ data', 'color: #f200e2', data);

            if (data.length > 0) {
                setColumns(Object.keys(data[0]));
                setDataTable(data);
            }
        };
        fetchData();
    }, [activeTab]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <main className="container container-fullscreen">
            <h1>Gestion Admin</h1>

            <section className="main-container">
                    {dataTable.length > 0 ? <TableStats columns={columns} dataTable={dataTable} /> : <p>Loading...</p>}
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
            </menu>
        </main>
    )

}