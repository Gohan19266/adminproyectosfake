import React from 'react';
import { Link } from 'react-router-dom';
import './FormPerfil.css';
import {useMiPerfilStyle} from '../../core/styles/MiPerfil/MiPerfilStyle';
import { Button, Icon, styled } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import LoopIcon from '@material-ui/icons/Loop';
import PersonIcon from '@material-ui/icons/Person';

import Avatar from '@material-ui/core/Avatar';

const FormPerfil = () => {
 const classes = useMiPerfilStyle();


  return (
      <div className={classes.perfil}>
        <div className='row'>
          <div>
            <br/>
            <form>
              <div className={classes.perfil}>
                <Avatar 
                alt="Perfil" 
                src="/static/images/avatar/1.jpg" 
                className={classes.large} 
                > Perfil
                  <PersonIcon/>  
                </Avatar>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                  name='lnombre'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Carrera/Programa'
                  name='lcarrera'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Correo electronico'
                  name='lcorreo'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Codigo Estudiante'
                  name='lcodigoEstudiante'
                />
              </div>
              
              <div className={classes.button}>
                <Link to='/Perfil'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    startIcon= {<LoopIcon/>}
                  >
                    Actualizar
                  </Button>
                </Link>
              </div>
              <div className={classes.button}>
                <Link to='/Perfil'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    startIcon= {<CancelIcon/>}
                  >
                    Cancelar
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};
export default FormPerfil;