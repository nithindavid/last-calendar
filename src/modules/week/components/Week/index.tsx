import React, { FC, memo } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import { Day } from "modules/week/components/Day";
import { TimeGuide } from "modules/week/components/TimeGuide";

type EventProps = {
  name: String;
  color: String;
  from: Date;
  to: Date;
};
type WeekProps = {
  startDate: Date;
  events: Array<EventProps>;
};


export const Week: FC<WeekProps> = memo((props) => {
  const { startDate, events = [] } = props;

  const startOfWeek = new Date(startDate);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  const startOfWeekDate = startOfWeek.getDate();

  endOfWeek.setHours(0, 0, 0, 0);
  endOfWeek.setDate(startOfWeekDate + 7);

  const dayEntries: Date[] = [];
  const eachDay = new Date(startOfWeek);
  while (eachDay < endOfWeek) {
    dayEntries.push(new Date(eachDay));

    const currentDay = eachDay.getDate();
    const nextDay = currentDay + 1;
    eachDay.setDate(nextDay);
  }

  const eventsByDate = events.reduce((acc, event) => {
    const dates = event.from
    acc[]
  }, {});

  return (
    <Box paddingTop={2}>
      <Grid container spacing={0}>
        <TimeGuide />
        {dayEntries.map((day) => (
          <Grid key={+day} xs item>
            <Day events={events} date={day} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});
