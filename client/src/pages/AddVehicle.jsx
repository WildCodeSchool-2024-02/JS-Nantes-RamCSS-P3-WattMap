import { useState, useRef } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Input from "../components/Input";
import PlugInfos from "../components/PlugInfos";
import "../styles/addVehicle.css";
import "../styles/Infos.css";
import "react-toastify/dist/ReactToastify.css";

export default function AddVehicle() {
  const plugTypes = useLoaderData();
  const navigate = useNavigate();

  const brandRef = useRef();
  const modelRef = useRef();
  const [compatiblePlugs, setCompatiblePlugs] = useState([]);

  const handlePlugClick = (plug) => {
    const newCompatiblePlugs = structuredClone(compatiblePlugs);
    const plugIndex = newCompatiblePlugs.indexOf(plug.type);

    if (plugIndex === -1) {
      // If the plug is not in the array, add it
      newCompatiblePlugs.push(plug.type);
    } else {
      // If the plug is already in the array, remove it
      newCompatiblePlugs.splice(plugIndex, 1);
    }
    setCompatiblePlugs(newCompatiblePlugs);
  };

  // Handle form submission to add a new vehicle
  const handleAddVehicle = async (e) => {
    e.preventDefault();
    try {
      // first reconstruct and validate the form data
      const brand = brandRef.current.value;
      const model = modelRef.current.value;

      const formDataisValid =
        brand.length >= 2 && model.length >= 2 && compatiblePlugs.length >= 1;

      if (formDataisValid) {
        // if data is ok, send a post request
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/vehicles`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ brand, model, compatiblePlugs }),
            credentials: "include",
          }
        );
        if (response.ok) {
          toast("✅ Véhicule ajouté avec succès");
          setTimeout(() => navigate("/profile"), 2000);
        } else {
          toast("❌ Erreur dans l'ajout du véhicule");
        }
      } else {
        toast(
          "❌ Ajout impossible : Vérifiez que tous les champs sont remplis"
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="add-vehicle-container">
      <h1 className="add-vehicle-title">Ajouter un nouveau véhicule</h1>
      <form onSubmit={handleAddVehicle} className="form add-vehicle-form">
        <div className="form-group">
          <label htmlFor="image" className="discrete-description">
            Choisir une image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            style={{ display: "none" }}
            aria-labelledby="image-label"
          />
          <label htmlFor="image" className="btn btn-secondary" id="image-label">
            {/* {newVehicle.image ? (
              <img
                src={newVehicle.image}
                alt="Aperçu"
                className="image-preview-img"
              />
            ) : (
              <VehicleImage imgUrl={'TODO: fix that ?'} isEditable />
            )} */}
          </label>
        </div>
        <Input type="text" labelText="Marque" reference={brandRef} />
        <Input type="text" labelText="Modèle" reference={modelRef} />
        <p className="input-label">
          Quel type de prise est compatible ? [ 1 Minimum]
        </p>
        <ul className="d-flex flex-row flex-wrap justify-content-center list-unstyled gap-3">
          {plugTypes.map((plug) => (
            <li
              key={plug.id}
              className={compatiblePlugs.includes(plug.type) ? "selected" : ""}
            >
              <button
                type="button"
                onClick={() => handlePlugClick(plug)}
                className="btn-transparent"
                aria-label={`Sélectionner le type de charge ${plug.label}`}
              >
                <PlugInfos plug={plug} compact={false} />
              </button>
            </li>
          ))}
        </ul>
        <button type="submit" className="btn btn-primary">
          Ajouter le véhicule
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
