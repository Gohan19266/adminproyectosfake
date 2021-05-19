import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { grey } from '@material-ui/core/colors';

export const useModalConfigStyle = makeStyles((theme) => ({
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