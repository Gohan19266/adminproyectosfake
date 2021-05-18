import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import StyledTreeIItem from '../StyledTreeItem/StyledTreeItem'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(41, 50, 30),
    borderRadius:'5%'
    
  },
  container: {
    width:'220px',
    height:'568px',
    position:'absolute',
    left: '368px',
    top:'93px',
    backgroundColor:grey[400],
    boxShadow: theme.shadows[5],
    
  },
  treecontainer:{
    position:'absolute',
    top:'20px',
    
  }
 
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <MoreVertIcon onClick={handleOpen}/>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.container}>
               <div className={classes.treecontainer}>
               <StyledTreeIItem/>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
