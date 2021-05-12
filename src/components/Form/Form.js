import React from 'react';
import { useMutation, gql } from '@apollo/client';
import Swal from 'sweetalert2';
import { useForm } from '../../core/hooks/useForm';
import { Link } from 'react-router-dom';
import Select from '../OptionSelect/OptionSelect';
import './form.css';
import { Button } from '@material-ui/core';

const Form = () => {
  const RegisterProyects = gql`
    mutation createProyect(
      $nombre: String!
      $descripcion: String!
      $estado: String!
      $codigoEstudiante: String!
      $codigoProfesor: String!
      $codigoMateria: String!
    ) {
      createProyect(
        proyect: {
          nombre: $nombre
          descripcion: $descripcion
          estado: $estado
          codigoEstudiante: $codigoEstudiante
          codigoProfesor: $codigoProfesor
          codigoMateria: $codigoMateria
        }
      ) {
        _id
      }
    }
  `;

  const [createProyect] = useMutation(RegisterProyects);
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    lnombre: '',
    ldescripcion: '',
    lestado: '',
    lcodigoEstudiante: '',
    lcodigoProfesor: '',
    lcodigoMateria: '',
  });

  const {
    lnombre,
    ldescripcion,
    lestado,
    lcodigoEstudiante,
    lcodigoProfesor,
    lcodigoMateria,
  } = formRegisterValues;

  const handleRegister = async (e) => {
    try {
      const { data } = await createProyect({
        variables: {
          nombre: lnombre,
          descripcion: ldescripcion,
          estado: lestado,
          codigoEstudiante: lcodigoEstudiante,
          codigoProfesor: lcodigoProfesor,
          codigoMateria: lcodigoMateria,
        },
      });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Ya el Proyecto existe',
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    }
  };

  return (
    <div>
      <div className='container login-container'>
        <div className='row'>
          <div>
            <h3>Registre su Proyecto</h3>
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre de Proyecto'
                  name='lnombre'
                  value={lnombre}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Descripcion'
                  name='ldescripcion'
                  value={ldescripcion}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Estado'
                  name='lestado'
                  value={lestado}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Codigo Estudiante'
                  name='lcodigoEstudiante'
                  value={lcodigoEstudiante}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Codigo profesor'
                  name='lcodigoProfesor'
                  value={lcodigoProfesor}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Codigo Materia'
                  name='lcodigoMateria'
                  value={lcodigoMateria}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className='btn-create'>
                <Link to='/MisProyectos'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    onClick={handleRegister}
                  >
                    Crear Proyecto
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
