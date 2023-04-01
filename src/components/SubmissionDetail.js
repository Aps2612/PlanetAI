import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import '../index.css'
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  image: {
    width: "80%",
    marginBottom: theme.spacing(2),
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const SubmissionDetail = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();


  const handleEditClick = () => {
    navigate(`/submissions/edit/${props.submission.id}`);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.submission.id);
  };

//   const handleFavoriteClick = () => {
//     setIsFavorited(!isFavorited);
//     props.onFavorite(props.submission.id);
//   };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        {props.submission.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {props.submission.description}
      </Typography>
      <img
        src={props.submission.url}
        alt={props.submission.title}
        className={classes.image}
      />
      <Typography variant="body1" gutterBottom>
        {props.submission.description}
      </Typography>
      {/* <Typography variant="subtitle2" gutterBottom>
        Hackathon Name: {props.submission.hackathonName}
      </Typography> */}
      <Typography variant="subtitle2" gutterBottom>
        Hackathon Start Date: {props.submission.hackathonStartDate}
      </Typography>
      {/* <Typography variant="subtitle2" gutterBottom>
        Hackathon End Date: {props.submission.hackathonEndDate}
      </Typography> */}
      {/* <Typography variant="subtitle2" gutterBottom>
        Github Repository Link: {props.submission.githubLink}
      </Typography> */}
      <div className={classes.icons}>
        <IconButton onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
        {/* {isFavorited ? (
          <IconButton onClick={handleFavoriteClick}>
            <FavoriteIcon color="secondary" />
          </IconButton>
        ) : (
          <IconButton onClick={handleFavoriteClick}>
            <FavoriteBorderIcon />
          </IconButton>
        )} */}
      </div>
    </div>
  );
};

export default SubmissionDetail;