import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useOptionSelectStyle} from '../../core/styles/OptionSelect/useOptionSelectStyle';

export default function OptionSelect() {
  const classes = useOptionSelectStyle();
  const [open, setOpen] = React.useState(false);
  const [Estado, setEstado] = React.useState('');

  const handleChange = (event) => {
    setEstado(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
      className={classes.root}
      onClick={handleClickOpen}>Estado</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Estado</InputLabel>
              <Select
                native
                value={Estado}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value=" " />
                <option value={1}>Finalizado</option>
                <option value={2}>En curso</option>
                <option value={3}>Abierto</option>
              </Select>

            </FormControl>
           
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

