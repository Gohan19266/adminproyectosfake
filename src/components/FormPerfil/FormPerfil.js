import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FormPerfil.css';
import {useMiPerfilStyle} from '../../core/styles/MiPerfil/MiPerfilStyle';
import { Button, Icon, styled } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import LoopIcon from '@material-ui/icons/Loop'
import Avatar from '@material-ui/core/Avatar';

export default  function FormPerfil({info}){ 
  const classes = useMiPerfilStyle();
  
  const addPlaces = async () => {
    let name = await info.getUserByCampusCode.name;
    let email = await info.getUserByCampusCode.email;
    let campusCode = await info.getUserByCampusCode.campusCode;
    let leter = name.substr(0,2);
    
    
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('campusCode', campusCode)
    sessionStorage.setItem('leter', leter)
    window.location.reload(true);
    
  };
 const name = sessionStorage.getItem('name');
 const email = sessionStorage.getItem('email');
 const campusCode = sessionStorage.getItem('campusCode');
 const leter = sessionStorage.getItem('leter')
 
 const removePlaces = async () => {

  sessionStorage.removeItem('name');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('campusCode');
  sessionStorage.removeItem('leter');
  window.location.reload(true);
 };

  return (
    
      <div className={classes.perfil}>
        <div className = 'form-1'>
        <div className='row'>
          <div>
            <br/>
            <form>
              <div className={classes.perfil}>
                <Avatar 
                className={classes.large} 
                > {leter}
                   
                </Avatar>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={name}
                  name='lnombre'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={campusCode}
                  name='lcarrera'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder= {email}
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
                    onClick={addPlaces}
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
                    onClick={removePlaces}
                  >
                    Cancelar
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

FormPerfil.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};