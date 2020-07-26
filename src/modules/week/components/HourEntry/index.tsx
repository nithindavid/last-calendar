import React, { FC, memo } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

type EventProps = { name: String; color: String };
type HourEntryProps = { date: Date; events: Array<EventProps> };

const useStyles = makeStyles((theme) => ({
  hourWrap: {
    height: 80,
    boxSizing: "border-box",
    width: "100%",
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export const HourEntry: FC<HourEntryProps> = memo((props) => {
  const { date, events = [] } = props;
  const classes = useStyles();

  return (
    <Box className={classes.hourWrap}>
      {events.map((event) => {
        const { name = "Random", color = "blue" } = event;
        return <Paper>{name}</Paper>;
      })}
    </Box>
  );
});
