import { useRef } from "react";
import ButtonAdmin from "../components/ButtonAdmin";

export default function Admin() {
    const sectionAdmin1Ref = useRef(null);
    // const sectionAdmin2Ref = useRef(null);
    // const sectionAdmin3Ref = useRef(null);
    // const sectionAdmin4Ref = useRef(null);


    return (
        <>

            <section ref={sectionAdmin1Ref} className="container section-home">
                <div className="container">
                    ds
                </div>
            </section>

            <ButtonAdmin />
            <ButtonAdmin />
            <ButtonAdmin />
        </>
    )

}