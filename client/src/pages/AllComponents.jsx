import "../styles/globals.css";
import { useRef } from "react";

import CardNews from "../components/CardNews";
import CardStation from "../components/CardStation";
import PlugInfos from "../components/PlugInfos";
import SwitchBtn from "../components/SwitchBtn";
import CardCta from "../components/CardCta";
import ButtonNext from "../components/ButtonNext";

export default function AllComponents() {
  const section1Ref = useRef(null);
  const cardcta2 = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="container">
      <h1>Mon grand titre</h1>
      <h2>CardNews</h2>
      <h3>Mon titre h3</h3>
      <CardNews />
      <SwitchBtn />
      <h2>CardStation</h2>
      <CardStation />
      <h2>Button Next</h2>
      <button type="button" onClick={() => scrollToSection(section1Ref)}>Aller à la Section 1</button>

      <ButtonNext
        sectionRef={section1Ref}
        label="Aller à la Section 1"
        scrollToSection={scrollToSection}
        icon='arrow-curve-down'
      />

      <h2>PlugInfos</h2>
      <PlugInfos plugType={{ type: 'demo plug', imgUrl: 'fr', maxPower: 10 }} />
      {/* <PlugInfos plugType={{ type: 'demo plug', imgUrl: 'fr', maxPower: 10 }} /> */}
      <h2 ref={section1Ref}>CardCta</h2>
      <CardCta />
      <div ref={cardcta2}>ddd</div>
    </main>
  );
}
