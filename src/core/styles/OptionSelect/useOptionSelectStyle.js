import { makeStyles } from '@material-ui/core/styles';

export const useOptionSelectStyle = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    root: {
      background: 'white',
      border: 30,
      borderRadius: 10,
      boxShadow: 'gray',
      color: 'gray',
      height: 40,
      padding: '0 30px',
    },
  }));