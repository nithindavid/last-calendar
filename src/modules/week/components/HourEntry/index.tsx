import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { EventProps } from "modules/week/types";

import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

type HourEntryProps = {
  date: Date;
  events: Array<EventProps>;
};

export const HourEntry: FC<HourEntryProps> = (props) => {
  const { date, events = [] } = props;
  const classes = useStyles();

  return (
    <Box className={classes.hourWrap}>
      <Grid className={classes.gridContainer} container spacing={0}>
        {events.map((event) => {
          const { id = "", name = "", color = "#FCCFF4" } = event;
          const key = `${+date}_${id}`;
          const isFirstCard =
            +new Date(event.from).setMinutes(0, 0, 0) ===
            +new Date(date).setMinutes(0, 0, 0);

          const formatedHour = ("0" + event.from.getHours()).slice(-2);
          const formatedMinute = ("0" + event.from.getMinutes()).slice(-2);
          const eventStartTime = `${formatedHour}:${formatedMinute}`;

          return (
            <Grid key={key} xs item>
              <Paper
                square
                elevation={0}
                className={classes.eventPaper}
                style={{ background: color as string }}
              >
                {isFirstCard && (
                  <>
                    <Typography variant="body2">
                      <strong>{eventStartTime}</strong>
                      {"  "}
                      {name}
                    </Typography>
                  </>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
