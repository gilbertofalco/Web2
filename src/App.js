import React, { useRef } from 'react';
import Input from './components/Input'
import './App.css';
import { Form } from '@unform/web';
import * as Yup from 'yup';

function App() {

  const formRef = useRef(null);
  const regexCep = /^\d{5}-\d{3}$/;

  async function handleSubmit(data, { reset }) {

    try {
      const schema = Yup.object().shape({
        CEP: Yup.string().min(7, 'CEP inválido').matches(regexCep, 'CEP inválido').required('*'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
        console.log(err);
      }
    }
  }
  return (
    
    <Form className="divGeral" ref={formRef} onSubmit={handleSubmit} id="formContato">
      <Input id="ipt" name="CEP" />
      <button className="styleButton" id="btn" type="submit">ENVIAR</button>
      <Input id="ipt" name="Cidade" />
      <Input id="ipt" name="Estado" />
      <Input id="ipt" name="Endereço" />
      <Input id="ipt" name="Faixa de número" />


    </Form>
  );
}

export default App;
