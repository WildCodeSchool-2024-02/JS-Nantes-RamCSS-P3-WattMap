import { useParams } from "react-router-dom";

function Station() {
  const { id } = useParams();

  return <h1>Hello from Station {id}</h1>;
}

export default Station;
