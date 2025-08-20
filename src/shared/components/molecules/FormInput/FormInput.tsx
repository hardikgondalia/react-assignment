import { BasicInput } from '../../atoms/Input/BasicInput';
import { Heading } from '../../atoms/Text/Heading';
import { FormInputProps } from './types';

export const FormInput = ({
  label,
  inputProps,
  className = '',
}: FormInputProps) => {
  return (
    <div className={`form-input ${className}`}>
      {label && <Heading level={3}>{label}</Heading>}
      <BasicInput {...inputProps} />
    </div>
  );
};