import { Link } from 'react-router-dom';
import { Container } from './styles';

export function PageNotFound() {
  return (
    <Container>
      <span>Pagina não encontrada 😱</span>
      <Link to={'/'}>Voltar</Link>
    </Container>
  );
}
