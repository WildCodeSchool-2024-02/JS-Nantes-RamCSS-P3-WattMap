import Input from "../components/Input";

export default function Login() {
  return (
    <>
      <h1>je suis dans la page de connexion</h1>
      <Input type="text" labelText="Username" />
      <Input type="password" labelText="Password" />
    </>
  );
}
