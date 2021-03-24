import { Logo } from "../Logo";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo />
        <button type="button" onClick={onOpenNewTransitionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
