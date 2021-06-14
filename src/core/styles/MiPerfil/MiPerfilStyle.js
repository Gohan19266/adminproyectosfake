import { makeStyles, createStyles,Theme } from '@material-ui/core/styles';

export const useMiPerfilStyle = makeStyles((theme) =>
  ({
    perfil: {
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',      
      padding:'30px',

    },
    card: {
      margin: 20,
    },
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      color:'#1D72C1'
    },
    input1:{
      justifyContent:'center',
      padding:'10px',
      display:'flex',
      alignItems:'center',
      float:'left',

    },
    button: {
      alignItems:'center',
      justifyContent:'center',
      float:'left',
      marginTop: 20,
      marginRight: 60,
      position: 'relative',
      top: '20%',
      right: 0,
      left: 20,
    },
  }));
