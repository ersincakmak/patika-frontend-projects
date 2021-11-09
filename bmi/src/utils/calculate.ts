export const calculateBmi = (kg: number, cm: number) => {
  return kg / Math.pow(cm / 100, 2)
}
