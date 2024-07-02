import "../styles/map.css"

export default function MapInsert() {
    return (
        <div>
            <iframe
                className="map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-5.976562500000001%2C43.79488907226601%2C10.085449218750002%2C50.764259357116465&amp;layer=mapnik"
                title="Carte OpenStreetMap de l'Europe de l'Ouest"
            />
        </div>
    );
}
