import { useParams } from "react-router-dom";

function News() {
  const { id } = useParams();

  return <h1>Hello from News {id}</h1>;
}

export default News;
