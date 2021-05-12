import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

export const useRecipeReviewCardStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    top: '20%',
    left: '8%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: indigo[500],
  },
}));
