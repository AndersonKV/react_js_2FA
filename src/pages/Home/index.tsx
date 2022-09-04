import { useEffect } from 'react';
import { SignIn } from '../SignIn';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    const storageKey = localStorage.getItem('@auth');
    console.log(storageKey);

    if (!storageKey) {
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
