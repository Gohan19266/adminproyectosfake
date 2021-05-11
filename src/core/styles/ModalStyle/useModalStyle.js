import { makeStyles } from '@material-ui/core/styles';

export const useModalStyle = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
  },
  button: {
    marginTop: 10,
    marginRight: 30,
    position: 'absolute',
    top: '90%',
    right: 0,
  },
}));
