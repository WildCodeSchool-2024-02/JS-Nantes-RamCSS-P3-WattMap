import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import CardCta from "../components/CardCta";
import CardNews from "../components/CardNews";
import Icons from "../components/Icons";
import ButtonNext from "../components/ButtonNext";
import "../styles/home.css";

export default function Home() {
  const articles = useLoaderData();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section ref={section1Ref} className="section-home">
        <div className="container">
          <h2 className="title-icon">
            <Icons choiceIcon="flash-pin" />
            Trouver une borne de recharge près de chez vous
          </h2>
          <CardCta
            cardLight={false}
            imageUrl="map-with-pin.png"
            title="Besoin de recharger votre véhcule?"
            description="Trouvez votre borne de recharge"
            iconButton="map"
            labelButton="voir la carte"
            linkTarget="/map"
          />
          <ButtonNext
            sectionRef={section2Ref}
            label="Réserver une borne"
            scrollToSection={scrollToSection}
            icon="arrow-curve-down"
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
            cardLight
            imageUrl="booking-plugstation-calendar-example.png"
            title="Réservez votre borne facilement"
            description="Plus d’attente aux stations : réserver en avance votre borne."
            iconButton="clock"
            labelButton="réservez"
            linkTarget="/map"
          />
          <ButtonNext
            sectionRef={section3Ref}
            label="Votre compte"
            scrollToSection={scrollToSection}
            icon="arrow-curve-down"
          />
        </div>
      </section>

      <section ref={section3Ref} className="section-home">
        <div className="container">
          <h2 className="title-icon">
            <Icons choiceIcon="flash-pin" />
            Personnaliser votre expérience
          </h2>
          <CardCta
            cardLight={false}
            imageUrl="finger-roadmap.jpeg"
            title="Créez votre compte"
            description="Pour ajouter votre véhicule et réserver des bornes"
            iconButton="user"
            labelButton="S'inscrire"
            linkTarget="/signup"
          />
          <ButtonNext
            sectionRef={section4Ref}
            label="dernières actualités"
            scrollToSection={scrollToSection}
            icon="arrow-curve-down"
          />
        </div>
      </section>
      <section ref={section4Ref} className="section-home section-news bg-grey">
        <div className="container">
          <h2 className="title-icon">
            <Icons choiceIcon="flash-pin" />
            Nos dernières actualités
          </h2>

          {articles.map((article) => (
            <CardNews
              key={article.id}
              title={article.title}
              content={article.content}
              date={article.publication_date}
              imageUrl={article.imageUrl}
            />
          ))}
          <ButtonNext
            classCustom="rotate-icon"
            sectionRef={section1Ref}
            label="Retour"
            scrollToSection={scrollToSection}
            icon="arrow-curve-down"
          />
        </div>
      </section>
    </>
  );
}
