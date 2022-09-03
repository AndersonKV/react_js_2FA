import React, { FormEvent } from 'react';

interface Props {
  placeholder: string;
  type: string;
  //handle: (event: FormEvent<Element>) => void;
  handle: any;
}
export function Input({ handle, placeholder, type }: Props) {
  return (
    <div>
      <input onChange={handle} placeholder={placeholder} type={type} />
    </div>
  );
}
