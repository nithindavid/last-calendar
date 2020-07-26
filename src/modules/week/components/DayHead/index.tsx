import React, { FC, memo } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { DAYS } from "modules/week/constants";
type DayHeadProps = { date: Date };
const useStyles = makeStyles((theme) => ({
  wrap: {
    height: 120,
    boxSizing: "border-box",
  },
  circle: {
    height: 40,
    width: 40,
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 64,
  },
}));

export const DayHead: FC<DayHeadProps> = memo((props) => {
  const { date } = props;
  const classes = useStyles();

  const dayOfWeek = date.getDay();
  const nameOfDay = DAYS[dayOfWeek];
  const dateOfMonth = date.getDate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
      className={classes.wrap}
    >
      <Typography variant="h6" gutterBottom>
        {nameOfDay}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.circle}
      >
        {dateOfMonth}
      </Box>
    </Box>
  );
});
