/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'

export const calculatorValidator = yup.object().shape({
  weight: yup
    .number()
    .typeError('${label} is a required field')
    .required()
    .label('Weight'),
  height: yup
    .number()
    .typeError('${label} is a required field')
    .required()
    .label('Height'),
  name: yup.string().required().label('Name'),
})
