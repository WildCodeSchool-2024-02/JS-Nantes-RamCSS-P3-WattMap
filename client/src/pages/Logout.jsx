import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Footer from "../components/Footer";


export default function Logout() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setIsAdmin } = useAuth();
  const serverResponse = useLoaderData();

  useEffect(() => {
    // if the server responds ok, then let the AuthContext know that we logged out
    if (serverResponse === "Logged out successfully") {
      setIsLoggedIn(() => false);
      setIsAdmin(() => false);
    }
    setTimeout(() => navigate("/login"), 1500);
  });

  return (
    <>
    <main className="container">
      <h1 className="main-title">Votre compte</h1>

      <section className="form-container">

        <h1 className="text-center">
          {serverResponse === "Logged out successfully"
            ? "✅ Déconnexion réussie, redirection ..."
            : "❌ Error de communication avec le serveur, réessayez"}
        </h1>
      </section>
    </main>
    <Footer />
    </>
  );
}