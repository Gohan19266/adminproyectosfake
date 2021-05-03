import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const Dashboard = () => {
  return (
    <MDBRow className='mb-4'>
      <MDBCol xl='3' md='6' className='mb-r'>
        <MDBCard className='cascading-admin-card'>
          <div className='admin-up'>
            <MDBIcon icon='folder-open' className='warning-color' />
            <div className='data'>
              <p>Mis Proyectos</p>
              <h4>
                <strong>4</strong>
              </h4>
            </div>
          </div>
          <MDBCardBody>
            <div className='progress'>
              <div
                aria-valuemax='100'
                aria-valuemin='0'
                aria-valuenow='25'
                className='progress-bar bg grey'
                role='progressbar'
                style={{ width: '25%' }}
              ></div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol xl='3' md='6' className='mb-r'>
        <MDBCard className='cascading-admin-card'>
          <div className='admin-up'>
            <MDBIcon icon='check-square' className='light-blue lighten-1' />
            <div className='data'>
              <p>Entregas</p>
              <h4>
                <strong>35</strong>
              </h4>
            </div>
          </div>
          <MDBCardBody>
            <div className='progress'>
              <div
                aria-valuemax='100'
                aria-valuemin='0'
                aria-valuenow='25'
                className='progress-bar grey darken-2'
                role='progressbar'
                style={{ width: '75%' }}
              ></div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol xl='3' md='6' className='mb-r'>
        <MDBCard className='cascading-admin-card'>
          <div className='admin-up'>
            <MDBIcon icon='calendar-check' className='red accent-2' />
            <div className='data'>
              <p>Actividad</p>
              <h4>
                <strong>56%</strong>
              </h4>
            </div>
          </div>
          <MDBCardBody>
            <div className='progress'>
              <div
                aria-valuemax='100'
                aria-valuemin='0'
                aria-valuenow='25'
                className='progress-bar bg-primary'
                role='progressbar'
                style={{ width: '25%' }}
              ></div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Dashboard;
