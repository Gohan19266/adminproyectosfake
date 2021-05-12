/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import { useForm } from '../../core/hooks/useForm';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import './login.css';

const Login = (props) => {
  const { history } = props;
  const AuthUser = gql`
    mutation authUser($campusCode: String!, $password: String!) {
      authUser(user: { campusCode: $campusCode, password: $password }) {
        token
      }
    }
  `;

  const [authUser] = useMutation(AuthUser);

  const [formLoginValues, handleLoginInputChange] = useForm({
    lcampusCode: '',
    lPassword: '',
  });

  const { lcampusCode, lPassword } = formLoginValues;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authUser({
        variables: { campusCode: lcampusCode, password: lPassword },
      });
      history.push('/Home');
      console.log(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Usuario y/o Contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    }
  };

  return (
    <div>
      <div className='container login-container'>
        <div className='row'>
          <div className='col-md-6 login-form-1'>
            <img
              className='logo'
              src='http://virtual.unac.edu.co/pluginfile.php/1/theme_adaptable/logo/1616779653/logoblanco1.png'
            />
            <p className='cab'>Ingrese su codigo de Campus Virtual</p>
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Codigo del Campus '
                  name='lcampusCode'
                  value={lcampusCode}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Contraseña'
                  name='lPassword'
                  value={lPassword}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className='wrap'>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  onClick={handleLogin}
                >
                  Ingresar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
