import * as yup from 'yup';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const passwordRegex: any =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email address is required')
    .email('Enter valid email address')
    .matches(regex, 'Enter valid email address'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      passwordRegex,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

export const signupValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email address is required')
    .email('Enter valid email address')
    .matches(regex, 'Enter valid email address'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      passwordRegex,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  // confirmPassword: yup
  //   .string()
  //   .required()
  //   //@ts-ignore
  //   .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const removeSpecialCharInString = (value: any) => {
  return value.replace(/[^a-zA-Z0-9 ]/g, '');
};
