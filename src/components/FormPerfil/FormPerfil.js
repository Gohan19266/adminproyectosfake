import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FormPerfil.css';
import {useMiPerfilStyle} from '../../core/styles/MiPerfil/MiPerfilStyle';
import Typography from '@material-ui/core/Typography';
import { Button, Icon, styled } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import LoopIcon from '@material-ui/icons/Loop';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';

export default function FormPerfil({info}){ 
  const classes = useMiPerfilStyle();
  console.log("!!!!!!!!!!!!!!!!!!!")
  console.log(info)
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
                > x
                  <PersonIcon/>  
                </Avatar>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder=""
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

FormPerfil.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};