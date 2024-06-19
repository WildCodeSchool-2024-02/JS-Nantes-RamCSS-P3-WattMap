import "../styles/globals.css";
import CardNews from "../components/CardNews";
import CardStation from "../components/CardStation";
import PlugInfos from "../components/PlugInfos";

export default function AllComponents() {
  return (
    <main className="container">
      <h2>CardNews</h2>
      <CardNews />

      <h2>CardStation</h2>
      <CardStation />

      <h2>PlugInfos</h2>
      <PlugInfos />
    </main>
  );
}
