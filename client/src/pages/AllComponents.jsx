import "../styles/globals.css";
import CardNews from "../components/CardNews";
import CardStation from "../components/CardStation";
import PlugInfos from "../components/PlugInfos";
import SwitchBtn from "../components/SwitchBtn";
import CardCta from "../components/CardCta";

export default function AllComponents() {
  return (
    <main className="container">
      <h1>Mon grand titre</h1>
      <h2>CardNews</h2>
      <h3>Mon titre h3</h3>
      <CardNews />
      <SwitchBtn />
      <h2>CardStation</h2>
      <CardStation />

      <h2>PlugInfos</h2>
      <PlugInfos plugType={{ type: "demo plug", imgUrl: "fr", maxPower: 10 }} />
      {/* <PlugInfos plugType={{ type: 'demo plug', imgUrl: 'fr', maxPower: 10 }} /> */}
      <h2>CardCta</h2>
      <CardCta />
    </main>
  );
}
