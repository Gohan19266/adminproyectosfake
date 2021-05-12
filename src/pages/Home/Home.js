import React from 'react';
import Drawers from '../../components/Drawer/Drawer';
import Dashboard from '../../components/Dashboard/Dashboard';
import TransitionAlerts from '../../components/TransitionAlerts/TransitionAlerts';

export const Home = () => {
  return (
    <div>
      <Drawers />
      <Dashboard />
      <TransitionAlerts/>
    </div>
  );
};
