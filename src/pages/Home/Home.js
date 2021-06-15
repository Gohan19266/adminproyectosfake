import React from 'react';
import Drawers from '../../components/Drawer/Drawer';
import Dashboard from '../../components/Dashboard/Dashboard';
import TransitionAlerts from '../../components/TransitionAlerts/TransitionAlerts';
import referido from '../../assets/images/referidos.png';
import header from '../../assets/images/headers.png';
import footer from '../../assets/images/footer.png';
import './Home.css';

export const Home = () => {
  return (
    <div>
      <Drawers />
      <Dashboard />
      <div className='colum-objects'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScVh5ZBj_bTYm3aDoW_obbZDBMHZPK4qnQjYl33K-qsORSEYw/viewform'>
          <img src={referido} className='imagen-principal' />
        </a>
        <div className='colum-video'>
          <img src={header} className='image-choque' />
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/2QMp9wiVKIw'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <img src={footer} className='image-choque' />
        </div>
      </div>
      <TransitionAlerts />
    </div>
  );
};
