import iconmeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconmeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt="Saídas" />
        </header>
        <strong> - R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}