import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return <input {...props} style={{ padding: '8px', borderRadius: 4 }} />;
};

export default Input;
