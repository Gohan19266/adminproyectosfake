/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { useDrawerStyle } from '../../core/styles/Drawer/useDrawerStyle';
import { useTheme } from '@material-ui/core/styles';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';


const Drawers = (props) => {
  const { history } = props;
  const classes = useDrawerStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('campusCode')
    window.location.reload(true);
  };
  const itemsList = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      onClick: () => history.push('/'),
    },
    {
      text: 'Mis Proyectos',
      icon: <FolderSharedIcon />,
      onClick: () => history.push('/MisProyectos'),
    },
  
    {
      text: 'Materias',
      icon: <ImportContactsIcon />,
      onClick: () => history.push('/Materias'),
    },
    
    {
      text: 'Docentes',
      icon: <SchoolIcon />,
      onClick: () => history.push('/Docente'),
    },
    {
      text: 'Perfil',
      icon: <AccountCircleIcon />,
      onClick: () => history.push('/Perfil'),
    },
    {
      text: 'Salir',
      icon: <PersonAddDisabledIcon/>,
      onClick: () => logOut(),
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Sistema de Proyectos Integradores
          </Typography> 
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <img src='http://k43.kn3.net/taringa/1/4/4/3/8/4/69/alkorrogasth/CAD.gif?2423'/>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
};
export default withRouter(Drawers);
