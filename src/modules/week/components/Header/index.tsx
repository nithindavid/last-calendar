import React, { FC, memo } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { useStyles } from "./styles";

type HeaderProps = {
  month: String;
  onNext: Function;
  onPrev: Function;
};

export const Header: FC<HeaderProps> = memo((props) => {
  const classes = useStyles();

  const { month = "", onNext = () => {}, onPrev = () => {} } = props;
  return (
    <AppBar position="static" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} align="left">
          Last Calendar
        </Typography>
        <Typography variant="h5" className={classes.title} align="left">
          {month}
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
});
