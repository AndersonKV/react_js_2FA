import { useEffect } from 'react';
import { SignIn } from '../SignIn';
import { Container } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';

interface Props {
  state: {
    auth?: boolean;
  };
}

export function Home() {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const props = location as Props;

    if (!props.state?.auth) {
      navigate('/sign_in');
    }
  }, []);

  return (
    <Container>
      <div>
        <span>Parabéns você está autenticado </span>
        <span> 🤝</span>
      </div>
    </Container>
  );
}
