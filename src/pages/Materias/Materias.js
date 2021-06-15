import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Drawers from '../../components/Drawer/Drawer';
import MediaCard from '../../components/CardsSubjects/CardSubjects';
import './Materias.css';

import { useMisProyectosStyle } from '../../core/styles/MisProyectos/MisProyectosStyle';

export const Materias = () => {
  const classes = useMisProyectosStyle();
  const GetSubjects = gql`
    query subjects {
      subjects {
        _id
        name
        credits
        faculty
        image
      }
    }
  `;
  const { data } = useQuery(GetSubjects);

  return (
    <>
      <div>
        <Drawers />
        <div className='colum-card'>
          {data?.subjects.map((subject) => {
            console.log(subject);
            return (
              <div className={classes.card}>
                <MediaCard subject={subject} />;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
