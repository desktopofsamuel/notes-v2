import React, { useState } from 'react';
import {
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
import { Form, Field, Formik } from 'formik';

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
  const API = process.env.CONVERTKIT_API_KEY;
  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //   },

  //   onSubmit: (values, actions) => {
  //     const data = {
  //       api_key: process.env.CONVERTKIT_API_KEY,
  //       email: values.email,
  //       first_name: values.name,
  //     };
  //     const feed = JSON.stringify(data);
  //     console.log(feed);
  //     fetch(FORM_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: feed,
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           let err = new Error('HTTP status code: ' + response.status);
  //           err.response = response;
  //           err.status = response.status;
  //           setStatus('API ERROR');
  //           throw err;
  //         }
  //         return setStatus('SUCCESS'), console.log('Success:', response);
  //       })
  //       // .then((data) => {
  //       //   console.log('Success:', data);
  //       //   setStatus('SUCCESS');
  //       // })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //         setStatus('ERROR');
  //       });
  //     actions.setSubmitting(false);
  //   },
  // });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={async (values, actions) => {
        const data = {
          api_key: API,
          email: values.email,
          first_name: values.name,
        };
        const feed = JSON.stringify(data);
        console.log(feed);
        fetch(FORM_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: feed,
        })
          .then((response) => {
            if (!response.ok) {
              let err = new Error('HTTP status code: ' + response.status);
              err.response = response;
              err.status = response.status;
              setStatus('API ERROR');
              throw err;
            }
            return setStatus('SUCCESS'), console.log('Success:', response);
          })
          // .then((data) => {
          //   console.log('Success:', data);
          //   setStatus('SUCCESS');
          // })
          .catch((error) => {
            console.error('Error:', error);
            setStatus('ERROR');
          });
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit} onReset={props.handleReset}>
          {status === 'SUCCESS' && (
            <Alert status="success">
              <AlertIcon />
              Check your inbox to confirm your subscription!
            </Alert>
          )}
          {status === 'ERROR' && (
            <Alert status="error">
              <AlertIcon />
              Sorry, some error has occured, please try again later.
            </Alert>
          )}
          {status === 'API ERROR' && (
            <Alert status="error">
              <AlertIcon />
              Sorry, API error has occured, please try again later.
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
