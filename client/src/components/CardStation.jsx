import Icons from "./Icons";
import PlugInfos from "./PlugInfos";

export default function CardStation() {
  return (
    <div className="vertical-center">
      <article className="card card-station">
        <header className="vertical-center">
          <figure className="rounded-img">
            <img src="../src/assets/image-test.jpg" alt="test" />
          </figure>
          <div>
            <h3 className="title-card">Sation name</h3>
            <div className="vertical-center">
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
          <button type="button" className="btn btn-contour">
            Télécharger la facture
          </button>
        </main>
      </article>

      <article className="card">
        <header className="vertical-center">
          <figure className="rounded-img">
            <img src="../src/assets/image-test.jpg" alt="test" />
          </figure>
          <div>
            <h3 className="title-card">Sation name</h3>
            <address>
              7 rue du chateau <br />
              44000 Nantes
            </address>
            <time dateTime="2023-07-07">07-07-2023</time>
          </div>
        </header>
        <main>
          <PlugInfos />
        </main>
      </article>
    </div>
  );
}
