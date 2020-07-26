import React, { FC, memo } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { EventProps } from "modules/week/types";

import { useStyles } from "./styles";

type HourEntryProps = {
  date: Date;
  events: Array<EventProps>;
};

export const HourEntry: FC<HourEntryProps> = memo((props) => {
  const { date, events = [] } = props;
  const classes = useStyles();

  return (
    <Box className={classes.hourWrap}>
      <Grid className={classes.gridContainer} container spacing={0}>
        {events.map((event) => {
          const { id = "", name = "", color = "#FCCFF4" } = event;
          const key = `${+date}_${id}`;
          return (
            <Grid key={key} xs item>
              <Paper
                square
                elevation={0}
                className={classes.eventPaper}
                style={{ background: color as string }}
              >
                {name}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
});
