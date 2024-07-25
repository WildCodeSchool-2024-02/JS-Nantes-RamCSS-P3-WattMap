import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";

export default function News() {
  const article = useLoaderData();

  return (<>
    <main className="container">
      {article === "Not Found" ? (
        <h1>Erreur 404 article non trouvé</h1>
      ) : (
        <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </>
      )}
    </main>
    <Footer />
    </>
  );
}
