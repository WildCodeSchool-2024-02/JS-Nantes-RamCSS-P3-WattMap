import { useRef } from "react";
import CardCta from "../components/CardCta";
import CardNews from "../components/CardNews";
import Icons from "../components/Icons";
import ButtonNext from "../components/ButtonNext";
import "../styles/home.css";

export default function Home() {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section ref={section1Ref} className="container section-home">
        <div className="container">

          <CardCta
            urlCard="map"
            cardLight={false}
            imageUrl="map-with-pin.png"
            title="Trouvez votre borne de recharge"
            description="Lorem ipsum dolor sit amet consectetur. Ultrices tincidunt pellentesque"
            iconButton="map"
            labelButton="voir la carte"
          />
          <ButtonNext
            sectionRef={section2Ref}
            label="Réserver une borne"
            scrollToSection={scrollToSection}
            icon='arrow-curve-down'
          />
        </div>
      </section>

      <section ref={section2Ref} className="section-home bg-primary">
        <div className="container">
          <h2 className="title-icon">
            <Icons choiceIcon="flash-pin" />
            Réserver un créneau
          </h2>
          <CardCta
            urlCard="map"
            cardLight
            imageUrl="booking-plugstation-calendar-example.png"
            title="Réservez votre borne facilement"
            description="Plus d’attente aux stations : réserver en avance votre borne."
            iconButton="clock"
            labelButton="réservez"
          />
          <ButtonNext
            sectionRef={section3Ref}
            label="Votre compte"
            scrollToSection={scrollToSection}
            icon='arrow-curve-down'
          />
        </div>
      </section>

      <section ref={section3Ref} className="container section-home">
        <div className="container">
          <h2 className="title-icon">
            <Icons choiceIcon="flash-pin" />
            Personnaliser votre expérience
          </h2>
          <CardCta
            urlCard="login"
            cardLight={false}
            imageUrl="finger-roadmap.jpeg"
            title="Créez votre compte"
            description="Lorem ipsum dolor sit amet consectetur. Ultrices tincidunt pellentesque "
            iconButton="user"
            labelButton="S'inscrire"
          />
          <ButtonNext
            sectionRef={section4Ref}
            label="dernières actualités"
            scrollToSection={scrollToSection}
            icon='arrow-curve-down'
          />
        </div>
      </section >
      <section ref={section4Ref} className="section-home bg-grey">
        <div className="container">
          <h2 className="title-icon">
            <Icons choiceIcon="flash-pin" />
            Nos dernières actualités
          </h2>
          <p className="pActu">fil-ariane</p>
          <CardNews />
          <CardNews />
          <CardNews />
          <ButtonNext
            classCustom="rotate-icon"
            sectionRef={section1Ref}
            label="Retour"
            scrollToSection={scrollToSection}
            icon='arrow-curve-down'
          />
        </div>
      </section>
    </>
  );
}
