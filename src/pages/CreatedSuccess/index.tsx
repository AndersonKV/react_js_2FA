import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  state: {
    success?: boolean;
  };
}
export function CreatedSuccess() {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const props = location as Props;

    if (!props.state?.success) {
      navigate('/page_400');
    }
  }, []);
  return (
    <Container>
      <div>
        <span>Conta criada com successo</span>
        <span>🤗</span>
      </div>
      <div>
        <Link to={'/sign_in'}>Entrar</Link>
      </div>
    </Container>
  );
}
