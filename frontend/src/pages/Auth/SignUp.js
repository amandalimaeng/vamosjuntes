import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import { Spacing, Container } from 'components/Layout';
import { H1, Error } from 'components/Text';
import { InputText, Button } from 'components/Form';
import Head from 'components/Head';

import { SIGN_UP } from 'graphql/user';


import * as Routes from 'routes';

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
 

  @media (min-width: ${p => p.theme.screen.md}) {
    justify-content: space-between;
    margin-top: 120px;
  }
`;

const Welcome = styled.div`
  display: none;
  flex-direction: column;
  color: ${p => p.theme.colors.white};
  width: 500px;

  @media (min-width: ${p => p.theme.screen.md}) {
    display: flex;
  }
`;


const Heading = styled(H1)`
  margin-bottom: 0px;
  max-width:550px;
  
`;



const Form = styled.div`
  padding: ${p => p.theme.spacing.md};
  border-radius: ${p => p.theme.radius.sm};
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  width: 450px;
  
  @media (min-width: ${p => p.theme.screen.sm}) {
    width: 450px;
    
  }
`;

/**
 * Sign Up page
 */
const SignUp = ({ history, refetch }) => {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    if (!fullName || !email || !username || !password) {
      return 'All fields are required';
    }

    if (fullName.length > 50) {
      return 'Full name no more than 50 characters';
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      return 'Enter a valid email address.';
    }

    const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    if (!usernameRegex.test(username)) {
      return 'Usernames can only use letters, numbers, underscores and periods';
    } else if (username.length > 20) {
      return 'Username no more than 50 characters';
    }

    if (password.length < 6) {
      return 'Password min 6 characters';
    }

    return false;
  };

  const handleSubmit = (e, signup) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setError(error);
      return false;
    }

    signup().then(async ({ data }) => {
      localStorage.setItem('token', data.signup.token);
      await refetch();
      history.push(Routes.HOME);
    });
  };

  const renderErrors = apiError => {
    let errorMessage;

    if (error) {
      errorMessage = error;
    } else if (apiError) {
      errorMessage = apiError.graphQLErrors[0].message;
    }

    if (errorMessage) {
      return (
        <Spacing bottom="sm" top="sm">
          <Error>{errorMessage}</Error>
        </Spacing>
      );
    }

    return null;
  };

  const { fullName, email, password, username } = values;

  return (
    <Mutation
      mutation={SIGN_UP}
      variables={{ input: { fullName, email, password, username } }}
    >
      {(signup, { loading, error: apiError }) => {
        return (
          
          <Root maxWidth="lg">
           
            <Head />
            
            
            <div>
            <img src='./vamos1.png' alt='logo com o nome vamos juntes e duas maos'/>
            <Welcome>
            
           
                <Heading color="white">
                
                Conecte-se com pessoas LGBTQI+ que estão na mesma jornada que você: Ter um filho.
                </Heading>
             
              <p>Sabemos que ter um filho é um passo muito importante na vida de qualquer um. Estamos aqui para te ajudar indicando os melhores profissionais, mandando informações sobre o tema e, acima de tudo, mostrando que você não está sozinho nesta jornada.</p>

            </Welcome>
            </div>
            

            <Form>
              <Spacing bottom="md">
                <H1>Crie sua conta</H1>
              </Spacing>

              <form onSubmit={e => handleSubmit(e, signup)}>
                <InputText
                  type="text"
                  name="fullName"
                  values={fullName}
                  onChange={handleChange}
                  placeholder="Nome"
                  borderColor="white"
                />
                <Spacing top="xs" bottom="xs">
                  <InputText
                    type="text"
                    name="email"
                    values={email}
                    onChange={handleChange}
                    placeholder="Email"
                    borderColor="white"
                  />
                </Spacing>
                <InputText
                  type="text"
                  name="username"
                  values={username}
                  onChange={handleChange}
                  placeholder="Usuário"
                  borderColor="white"
                />
                <Spacing top="xs" bottom="xs">
                  <InputText
                    type="password"
                    name="password"
                    values={password}
                    onChange={handleChange}
                    placeholder="Senha"
                    borderColor="white"
                  />
                </Spacing>

                {renderErrors(apiError)}

                <Spacing top="sm" />
                <Button size="large" disabled={loading}>
                  Cadastre-se
                </Button>
              </form>
            </Form>
          </Root>
        );
      }}
    </Mutation>
  );
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default withRouter(SignUp);
