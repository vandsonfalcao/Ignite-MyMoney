import { Container } from "./styles";
import coinImg from "../../assets/coin.png";

export function Logo() {
  return (
    <Container>
      <img src={coinImg} alt="Logo" />
      <span>My money</span>
    </Container>
  );
}
