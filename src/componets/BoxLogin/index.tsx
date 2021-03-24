import {
  Container,
  ContainerHeader,
  ContainerMain,
  ContainerMensage,
  ContainerSignIn,
} from "./styles";

import coinImg from "../../assets/coin.png";
import { SiDiscord, SiGithub } from "react-icons/si";

export function BoxLogin() {
  function handleAutenticationWithGithub() {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=f11361154102bf62e310&state=20212021&scope=user";
  }
  function handleAutenticationWithDiscord() {
    window.location.href =
      "https://discord.com/api/oauth2/authorize?client_id=824415522945761300&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fin&response_type=code&scope=identify%20email";
  }
  return (
    <Container>
      <ContainerHeader>
        <img src={coinImg} alt="Logo" />
        <span>My money</span>
      </ContainerHeader>
      <ContainerMain>
        <div className="container-page-login">
          <ContainerMensage>
            <h1>Sua vida financeira simplificada.</h1>
          </ContainerMensage>
          <ContainerSignIn>
            <h2>Entrar</h2>
            <button onClick={handleAutenticationWithGithub}>
              <SiGithub />
              <div>Conecte-se com Github</div>
            </button>
            <button onClick={handleAutenticationWithDiscord}>
              <SiDiscord />
              <div>Conecte-se com Discord</div>
            </button>
          </ContainerSignIn>
        </div>
      </ContainerMain>
    </Container>
  );
}
