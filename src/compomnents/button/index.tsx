interface Props {
  type: 'button' | 'reset' | 'submit';
  name: string;
}
export function Button({ type, name }: Props) {
  return <button type={type}>{name}</button>;
}
