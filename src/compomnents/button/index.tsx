import { StyledButton } from './styles';

interface Props {
  type: 'button' | 'reset' | 'submit';
  name: string;
  color: string;
}
export function Button({ type, name, color }: Props) {
  return (
    <StyledButton theme={color} type={type}>
      {name}
    </StyledButton>
  );
}
