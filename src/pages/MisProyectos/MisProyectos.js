import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Drawers from '../../components/Drawer/Drawer';
import { FormDialog } from '../../components/Modal/Modal';
import RecipeReviewCard from '../../components/RecipeReviewCard/RecipeReviewCard';
import { useMisProyectosStyle } from '../../core/styles/MisProyectos/MisProyectosStyle';

export const MisProyectos = () => {
  const classes = useMisProyectosStyle();
  const GetProyects = gql`
    query proyects {
      proyects {
        nombre
        descripcion
        estado
      }
    }
  `;
  const { data } = useQuery(GetProyects);

  return (
    <div>
      <Drawers />
      <div className={classes.root}>
        {data?.proyects.map((proyecto) => {
          console.log(proyecto);
          return (
            <div className={classes.card}>
              <RecipeReviewCard proyecto={proyecto} />;
            </div>
          );
        })}
      </div>
      <FormDialog />
    </div>
  );
};
