import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Container,
  Input,
  Button,
  Stack,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { Form, Field, Formik } from 'formik';
// import eo from 'email-octopus';

function validateName(value) {
  let error;
  if (!value) {
    error = 'Name is required';
  }
  return error;
}

function validateEmail(value) {
  let error;

  if (!value) {
    error = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }

  return error;
}

const Newsletter = ({}) => {
  const [status, setStatus] = useState(null);
  const FORM_URL = `https://api.convertkit.com/v3/forms/1917969/subscribe`;

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={(values, actions) => {
        fetch(FORM_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: process.env.CONVERTKIT_API_KEY,
            email: values.email,
            first_name: values.name,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            setStatus('SUCCESS');
          })
          .catch((error) => {
            console.error('Error:', error);
            setStatus('ERROR');
          });
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          {status === 'SUCCESS' && (
            <Alert status="success">
              <AlertIcon />
              Check your inbox to confirm your subscription!
            </Alert>
          )}
          {status === 'ERROR' && (
            <Alert status="error">
              <FaCheckCircle />
              Sorry, some error has occured, please try again later.
            </Alert>
          )}
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                isRequired
              >
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input {...field} id="name" placeholder="你的名字" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                isRequired
              >
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  {...field}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="你的電郵地址"
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button mt={4} isLoading={props.isSubmitting} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Newsletter;
