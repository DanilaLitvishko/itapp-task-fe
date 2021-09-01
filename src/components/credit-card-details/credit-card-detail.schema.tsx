import * as Yup from 'yup';

const maxMessage =
  (field: string) =>
  ({ max }: { max: number }) =>
    `${field} must be at most ${max} characters`;
const minMessage =
  (field: string) =>
  ({ min }: { min: number }) =>
    `${field} must be at least ${min} characters`;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Cardholder Name is required')
    .min(2, minMessage('Cardholder Name'))
    .max(255, maxMessage('Cardholder Name')),
});

export default validationSchema;