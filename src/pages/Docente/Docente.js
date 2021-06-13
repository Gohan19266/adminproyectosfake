import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Drawers from '../../components/Drawer/Drawer';
import  Grid  from '../../components/Grid/Grid';
import './Docente.css';

export const Docente = () => {
  const GetUsers = gql`
    query{
      users{
        _id
        name
        email
        campusCode
      }
    }
  `;
  const { data } = useQuery(GetUsers);
  return (
    <div>
      <Drawers />
        <div className="containerx">
          <img className='imga' src='https://fontmeme.com/permalink/210608/4a230ff0feec7a1d7ac3fb908544ae94.png'/>
           <img className='logi'src='http://virtual.unac.edu.co/pluginfile.php/1/theme_adaptable/logo/1616779653/logoblanco1.png'/>
        </div>
        <div className="Grid-Card">
          {data?.users.map((user) => {
            console.log(user);
               return (
             <div>
                
            </div>
          );
        })}
        <Grid/>
        </div>
    </div>
   
  );
};
