import "../styles/globals.css";
import CardNews from "../components/CardNews";
import CardStation from "../components/CardStation";
import PlugInfos from "../components/PlugInfos";
import SwitchBtn from "../components/SwitchBtn";

export default function AllComponents() {
  return (
    <main className="container">
      <h2>CardNews</h2>
      <CardNews />
      <SwitchBtn />
      <h2>CardStation</h2>
      <CardStation />

      <h2>PlugInfos</h2>
      <PlugInfos />
    </main>
  );
}
