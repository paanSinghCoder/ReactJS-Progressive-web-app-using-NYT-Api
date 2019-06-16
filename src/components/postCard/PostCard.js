import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { thumbUrl } from '../../img/user.png';
import { coverUrl } from '../../img/cover.jpg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  aStyle: {
    textDecoration: 'none',
    color: 'black'
  }
}));
export default function PostCard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {//Handle three dots click event
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  var thumb, cover;
  {props.multimediaArray[0]===undefined ? thumb={thumbUrl} : thumb=props.multimediaArray[0].url}//Fallback to default avatar if url is null  
  {props.multimediaArray[3]===undefined ? cover={coverUrl} : cover=props.multimediaArray[3].url}
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <img src={ thumb } alt='' />
          </Avatar>
        }
        action={
          <IconButton onClick={handleClick} aria-label='more options'>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.author.split(' ').slice(0, 3).join(' ')}//Only first author name is displayed
        subheader={props.publishedDate.slice(0, 10)}//Only date is displayed, time is ignored
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <a href={props.articleUrl} className={classes.aStyle} target='_blank' rel="noopener noreferrer">
        <MenuItem onClick={handleClose}>Read on NYT</MenuItem>
      </a>
      </Menu>
      <a href={props.articleUrl} className={classes.aStyle} target='_blank' rel="noopener noreferrer">
        <CardMedia
        className={classes.media}
        image={cover}
        title={props.title}
      /></a>
      <CardContent>
      <a href={props.articleUrl} className={classes.aStyle} target='_blank' rel="noopener noreferrer">
        <Typography variant="h6" color="textPrimary" component="h6">
          { props.title }
        </Typography>
      </a>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.abstract}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}