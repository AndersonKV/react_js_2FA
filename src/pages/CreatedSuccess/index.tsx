import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  return <div>sucesso</div>;
}
