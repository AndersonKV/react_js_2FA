import React, { FormEvent } from 'react';
import { Content } from './styles';

interface Props {
  placeholder?: string;
  type: string;
  handle: (event: FormEvent<Element>) => void;
  name: string;
  labelError: string;
}
export function Input({ handle, name, placeholder, type, labelError }: Props) {
  return (
    <Content>
      <input
        name={name}
        onChange={handle}
        placeholder={placeholder}
        type={type}
      />

      {labelError && (
        <div>
          <p>
            *<label>{labelError}</label>
          </p>
        </div>
      )}
    </Content>
  );
}
