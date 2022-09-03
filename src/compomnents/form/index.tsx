import { FormEvent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  handle: (event: FormEvent) => void;
}
export function Form({ children, handle, ...props }: Props) {
  return <form onSubmit={handle}>{children}</form>;
}
