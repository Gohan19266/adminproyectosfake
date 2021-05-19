import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import StyledTreeIItem from '../StyledTreeItem/StyledTreeItem'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useModalConfigStyle} from '../../core/styles/ModalConfig/useModalConfigStyle';

export default function TransitionsModal() {
  const classes = useModalConfigStyle();
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
