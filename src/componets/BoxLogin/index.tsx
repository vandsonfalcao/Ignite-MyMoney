import {
  Container,
  ContainerHeader,
  ContainerMain,
  ContainerMensage,
  ContainerSignIn,
} from "./styles";

import githubImg from "../../assets/github.svg";
import coinImg from "../../assets/coin.png";

export function BoxLogin() {
  function handleAutentication() {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=f11361154102bf62e310";
  }
  return (
    <Container>
      <ContainerHeader>
        <img src={coinImg} alt="Logo" />
        <span>My money</span>
      </ContainerHeader>
      <ContainerMain>
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
      </ContainerMain>
    </Container>
  );
}
