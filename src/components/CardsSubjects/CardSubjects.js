import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ subject }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={subject.image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {subject.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Facultad:{subject.faculty}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Creditos:{subject.credits}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

MediaCard.propTypes = {
  subject: PropTypes.shape({
    name: PropTypes.string,
    credits: PropTypes.string,
    faculty: PropTypes.string,
    image: PropTypes.string,
  }),
};
