import React, { FormEvent } from 'react';
import { Content } from './styles';

interface Props {
  placeholder?: string;
  type: string;
  //handle: (event: FormEvent<Element>) => void;
  handle: any;
  name?: string;
}
export function Input({ handle, name, placeholder, type }: Props) {
  return (
    <Content>
      <input onChange={handle} placeholder={placeholder} type={type} />
    </Content>
  );
}
