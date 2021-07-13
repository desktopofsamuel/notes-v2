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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
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
  // const [status, setStatus] = useState(null);
  // const [email, setEmail] = useState('');
  // const listId = '50c6d144-ae86-11eb-a3d0-06b4694bee2a';
  // const emailOctopus = new eo.EmailOctopus(
  //   apiKey,
  // );

  // const FORM_URL = `https://app.convertkit.com/forms/1917969/subscriptions`;

  // const handleSubmit = async (data) => {
  //   // const data = new FormData(e.target);
  //   console.log(data);
  //   try {
  //     const response = await fetch(FORM_URL, {
  //       method: 'post',
  //       body: data,
  //       headers: {
  //         accept: 'application/json',
  //       },
  //     });
  //     setEmail('');
  //     const json = await response.json();
  //     if (json.status === 'success') {
  //       setStatus('SUCCESS');
  //       console.log(sucess);
  //       return;
  //     }
  //   } catch (err) {
  //     setStatus('ERROR');
  //     console.log(err);
  //   }
  // };

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setEmail(value);
  // };

  // var options = {
  //   email_address: 'john@doe.com',
  //   first_name: 'John',
  //   last_name: 'Doe',
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.body);
  //   emailOctopus.lists.contacts
  //     .create(listId, e.body)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <Formik
      initialValues={{ name: 'My Name' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      // onSubmit={handleSubmit}
      // async (data) => {
      // base('Newsletter').create(
      //   [
      //     {
      //       fields: {
      //         Email: values.email,
      //         Name: values.name,
      //       },
      //     },
      //   ],
      //   (err) => {
      //     if (err) {
      //       console.error(err);
      //       console.log(values);
      //     }
      //   },
      // );

      // fetch('https://app.convertkit.com/forms/1917969/subscriptions', {
      //   method: 'post',
      //   body: JSON.stringify(data),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   mode: 'no-cors',
      // }).then((response) => response.json());
    >
      {(props) => (
        <Form>
          {/* {status === 'SUCCESS' && (
              <p>Please go confirm your subscription!</p>
            )}
            {status === 'ERROR' && (
              <p>Oops, Something went wrong! try again.</p>
            )} */}
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
