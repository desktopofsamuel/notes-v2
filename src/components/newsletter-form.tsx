import React, { useState } from 'react';
import {
  Container,
  Input,
  Button,
  Stack,
  Alert,
  HStack,
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
  const API = process.env.GATSBY_CONVERTKIT_API_KEY;
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
        const feed = JSON.stringify({
          api_key: API,
          email: values.email,
          first_name: values.name,
        });
        console.log(values);
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
        actions.setSubmitting(true);
      }}
    >
      {({ handleSubmit, handleReset, isSubmitting }) => (
        <Form
          onSubmit={handleSubmit}
          onReset={handleReset}
          style={{ width: '100%' }}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            minHeight="80px"
            my="2"
          >
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  isRequired
                >
                  {/* <FormLabel htmlFor="name">First name</FormLabel> */}
                  <Input {...field} id="name" placeholder="Your name" />
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
                  {/* <FormLabel htmlFor="email">E-mail</FormLabel> */}
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              minWidth="100px"
              variant="brand"
              isLoading={isSubmitting}
              isDisabled={status === 'SUCCESS'}
              type="submit"
            >
              Submit
            </Button>
            {console.log(isSubmitting)}
          </Stack>
          {status === 'SUCCESS' && (
            <Alert status="success">
              <AlertIcon />
              還差一步，立即打開你的電郵信箱確認電郵。
            </Alert>
          )}
          {status === 'ERROR' && (
            <Alert status="error">
              <AlertIcon />
              對不起，發生了錯誤，請稍後再試一次。
            </Alert>
          )}
          {status === 'API ERROR' && (
            <Alert status="error">
              <AlertIcon />
              對不起，API 發生了錯誤，請稍後再試一次。
            </Alert>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Newsletter;
