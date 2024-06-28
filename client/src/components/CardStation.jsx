import { Link } from "react-router-dom";
import Icons from "./Icons";
import PlugInfos from "./PlugInfos";

export default function CardStation() {
  return (
    <div className="flex-row">
      <article className="card card-station">
        <header className="d-flex align-items-center">
          <figure className="rounded-img">
            <img src="../src/assets/image-test.jpg" alt="test" />
          </figure>
          <div className="infos-card">
            <h3 className="title-card">Station name</h3>
            <div className="d-flex align-items-center">
              <Icons choiceIcon="home" />
              <time dateTime="2023-07-07">07-07-2023</time>
              <p className="price-station">10€</p>
            </div>
          </div>
        </header>

        <main>
          <address>
            7 rue du chateau <br />
            44000 Nantes
          </address>
          <Link to="components" className="btn btn-contour">
            Télécharger la facture
          </Link>
        </main>
      </article>

      <article className="card">
        <header className="d-flex align-items-center">
          <figure className="rounded-img">
            <img src="../src/assets/image-test.jpg" alt="test" />
          </figure>
          <div className="infos-card">
            <h3 className="title-card">Sation name</h3>
            <address>
              7 rue du chateau <br />
              44000 Nantes
            </address>
            <time dateTime="2023-07-07">07-07-2023</time>
          </div>
        </header>
        <main>
          <PlugInfos
            plugType={{ type: "demo plug", imgUrl: "fr", maxPower: 10 }}
          />
        </main>
      </article>
    </div>
  );
}
