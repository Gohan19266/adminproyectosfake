import React from 'react';
import Drawers from '../../components/Drawer/Drawer';
import  Grid  from '../../components/Grid/Grid';
import { useQuery, gql } from '@apollo/client';
import './Docente.css';

export const Docente = () => {
  const GetUsers = gql `query{
    users{
      _id
      name
      email
      campusCode
    }
  }`;
  const { data } = useQuery(GetUsers);

  const users=[];
  

    {data?.users.map((user) => {
      
      users.push({
       id:user._id,
       name: user.name,
       code: user.campusCode,
       note:5,
       email:user.email
  
      });   
    })

  };
  
  return (
    <div>
      <Drawers />
        <div className="containerx">
          <img className='imga' src='https://fontmeme.com/permalink/210608/4a230ff0feec7a1d7ac3fb908544ae94.png'/>
           <img className='logi'src='https://www.unac.edu.co/wp-content/uploads/2021/02/logoblanco1.png'/>
        </div>
        <div className="Grid-Card">
      
       
        <Grid users = {users}/>;

        </div>
    </div>
   
  );
};
