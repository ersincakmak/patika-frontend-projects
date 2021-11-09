import { FieldHookConfig, useField } from 'formik'
import styled from 'styled-components'
import FormikError from '../FormikError'

const Input = styled.input`
  padding: 1em;
  border: 1px solid ${(props) => props.theme.colors.brand};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.inputBg};
  color: ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.transition};
  font-size: 1rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholderColor};
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`

const Label = styled.label`
  font-size: 0.875rem; // 14px
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

interface Props {
  props: FieldHookConfig<string>
  label: string
}

const FormikField: React.FC<Props> = ({ props, label }) => {
  const [field, meta] = useField(props)

  return (
    <Label>
      {label}
      <Input {...field} {...props} />
      {meta.touched && meta.error && <FormikError msg={meta.error} />}
    </Label>
  )
}

export default FormikField
