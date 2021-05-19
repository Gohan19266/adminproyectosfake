import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useTransitionAlertsStyle } from '../../core/styles/TransitionAlerts/useTransitionAlertsStyle';

export default function TransitionAlerts() {
  const classes = useTransitionAlertsStyle();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Bienvenido al Sistema de Proyectos integradores!
        </Alert>
      </Collapse>
    </div>
  );
}