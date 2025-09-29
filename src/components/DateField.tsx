import { FC, InputHTMLAttributes } from 'react';

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const DateField: FC<DateFieldProps> = (props) => {
  return <input type="date" {...props} style={{ padding: '8px', borderRadius: 4 }} />;
};

export default DateField;
