import React from 'react';
import Drawers from '../../components/Drawer/Drawer';
import FormPerfil from '../../components/FormPerfil/FormPerfil';
import { useQuery, gql } from '@apollo/client';


export const MiPerfil = () => {

    const campusCodeL = localStorage.getItem('campusCode');
    const GetUserByCampusCode = gql `query getUserByCampusCode{
      getUserByCampusCode(user:{
        campusCode:"${campusCodeL}"
      }){
        name
        email
      }
    }`;
  
  const { data } = useQuery(GetUserByCampusCode);
  console.log(campusCodeL+"!!!!!aYUDA")
  
  

    return (
        <div>
            <Drawers />
            <FormPerfil info = {data}/>
            
        </div>
    );
};
