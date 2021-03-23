import { Container, ContainerMensage, ContainerSignIn } from "./styles";

import githubImg from "../../assets/github.svg";

export function BoxLogin() {
  function handleAutentication() {
    fetch("https://github.com/login/oauth/authorize")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <Container>
      <ContainerMensage>
        <h1>Sua vida financeira simplificada.</h1>
      </ContainerMensage>
      <ContainerSignIn>
        <h2>Entrar</h2>
        <button onClick={handleAutentication}>
          <img src={githubImg} alt="github" />
          <div>Conecte-se com github</div>
        </button>
      </ContainerSignIn>
    </Container>
  );
}
