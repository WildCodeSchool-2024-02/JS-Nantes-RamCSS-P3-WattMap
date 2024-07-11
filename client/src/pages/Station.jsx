import { useLoaderData } from "react-router-dom";

function Station() {
  const station = useLoaderData();

  return <h1>Hello from {station.name}</h1>;
}

export default Station;
