import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpneNewTransactionModal: () => void;
}

export function Header({ onOpneNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="russo money" />
        <button type="button" onClick={onOpneNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
