import React, { FC } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.common.white,
  },
  title: {
    flexGrow: 1,
  },
  nextButton: {
    marginLeft: theme.spacing(),
  },
}));

type HeaderProps = {
  onNext: Function;
  onPrev: Function;
};

export const Header: FC<HeaderProps> = (props) => {
  const classes = useStyles();

  const { onNext = () => {}, onPrev = () => {} } = props;
  return (
    <AppBar position="static" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} align="left">
          Last Calendar
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => onPrev()}
          startIcon={<ArrowBackIcon />}
        >
          Previous week
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => onNext()}
          endIcon={<ArrowForwardIcon />}
          className={classes.nextButton}
        >
          Next week
        </Button>
      </Toolbar>
    </AppBar>
  );
};
