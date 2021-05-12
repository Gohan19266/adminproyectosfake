import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useRecipeReviewCardStyles } from '../../core/styles/RecipeReviewCardStyles/useRecipeReviewCardStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

export default function RecipeReviewCard({ proyecto }) {
  const classes = useRecipeReviewCardStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(proyecto);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={proyecto.nombre}
      />
      <CardMedia
        className={classes.media}
        image='https://mapio.net/images-p/121218168.jpg'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {proyecto.descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{proyecto.estado}</Typography>
          <Typography paragraph>{proyecto.descripcion}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

RecipeReviewCard.propTypes = {
  proyecto: PropTypes.shape({
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    estado: PropTypes.string,
  }),
};
