import CardCta from "../components/CardCta";
import CardNews from "../components/CardNews";
import Icons from "../components/Icons";

export default function Home() {
  return (
    <main className="container">
      <h1>je suis dans la homepage</h1>

      <section className="section-home">
        <CardCta
          cardLight={false}
          imageUrl="map-with-pin.png"
          title="Trouvez votre borne de recharge"
          description="Lorem ipsum dolor sit amet consectetur. Ultrices tincidunt pellentesque"
          iconButton="map"
          labelButton="voir la carte"
        />
      </section>

      <section className="section-home bg-primary">
        <h2 className="title-icon">
          <Icons choiceIcon="flash" />
          Réserver un créneau
        </h2>
        <CardCta
          cardLight
          imageUrl="booking-plugstation-calendar-example.png"
          title="Réservez votre borne facilement"
          description="Plus d’attente aux stations : réserver en avance votre borne."
          iconButton="clock"
          labelButton="réservez"
        />
      </section>

      <section className="section-home">
        <h2 className="title-icon">
          <Icons choiceIcon="flash" />
          Personnaliser votre expérience
        </h2>
        <CardCta
          cardLight={false}
          imageUrl="finger-roadmap.jpeg"
          title="Créez votre compte"
          description="Lorem ipsum dolor sit amet consectetur. Ultrices tincidunt pellentesque "
          iconButton="user"
          labelButton="S'inscrire"
        />
      </section>
      <section className="section-home bg-grey">
        <h2 className="title-icon">
          <Icons choiceIcon="flash" />
          Nos dernières actualités
        </h2>
        <p className="pActu">fil-ariane</p>
        <CardNews />
        <CardNews />
        <CardNews />
      </section>
    </main>
  );
}
