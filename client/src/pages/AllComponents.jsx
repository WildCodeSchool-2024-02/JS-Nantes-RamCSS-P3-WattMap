import CardNews from "../components/CardNews";
import CardStation from "../components/CardStation";
import PlugInfos from "../components/PlugInfos";

export default function AllComponents() {
  return (
    <main className="container">
      <CardNews />
      <CardStation />
      <PlugInfos />
    </main>
  );
}
