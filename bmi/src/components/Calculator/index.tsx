import { FormikProvider, useFormik } from 'formik'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { CalculatorValues, Result } from '../../types/calculator'
import { calculateBmi } from '../../utils/calculate'
import { writeToLocalStorage } from '../../utils/localStorage'
import { calculatorValidator } from '../../utils/validator'
import FormikField from '../FormikField/FormikField'
import BmiResult from '../Result'

const Button = styled.button`
  padding: 0.7em 1em;
  background-color: ${(props) => props.theme.colors.brand};
  border: none;
  outline: none;
  border-radius: 5px;
  text-align: center;
  width: max-content;
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.colors.brandContrastText};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.brandHover};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  width: min(37.5rem, 100%);
  margin: auto;
`

const Calculator = () => {
  const [result, setResult] = useState<Result>({
    bmi: 0,
    name: '',
  })

  const [resultOpen, setresultOpen] = useState(false)

  const ref = useRef<HTMLFormElement>(null)

  const formik = useFormik<CalculatorValues>({
    initialValues: {
      height: Number(undefined),
      weight: Number(undefined),
      name: '',
    },
    validationSchema: calculatorValidator,
    onSubmit: (values, formikHelpers) => {
      const calculatedValues = {
        bmi: calculateBmi(values.weight as number, values.height as number),
        name: values.name,
      }
      setResult(calculatedValues)
      setresultOpen(true)
      writeToLocalStorage(calculatedValues)

      ref.current?.parentElement?.scrollTo({
        behavior: 'smooth',
        top: ref.current.scrollHeight,
      })

      formikHelpers.resetForm()
    },
  })

  return (
    <FormikProvider value={formik}>
      <Form
        ref={ref}
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          formik.submitForm()
        }}
      >
        <FormikField
          label="Name"
          props={{
            name: 'name',
            type: 'text',
            placeholder: 'Type your name',
          }}
        />
        <FormikField
          label="Weight (kg)"
          props={{
            name: 'weight',
            type: 'number',
            placeholder: 'Type your weight',
          }}
        />
        <FormikField
          label="Height (cm)"
          props={{
            name: 'height',
            type: 'number',
            placeholder: 'Type your height',
          }}
        />
        <Button type="submit">Calculate</Button>
        {resultOpen === true && <BmiResult result={result} />}
      </Form>
    </FormikProvider>
  )
}

export default Calculator
