import React, { FC } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { Day } from "modules/week/components/Day";
import { TimeGuide } from "modules/week/components/TimeGuide";

import { EventProps } from "modules/week/types";

import { useDaysOfWeek } from "./hooks";

type WeekProps = {
  startDate: Date;
  eventsByDate: { [date: number]: EventProps[] };
};

export const Week: FC<WeekProps> = (props) => {
  const { startDate, eventsByDate = {} } = props;
  const dayEntries = useDaysOfWeek(startDate);

  return (
    <Box paddingTop={2}>
      <Grid container spacing={0}>
        <TimeGuide />
        {dayEntries.map((day) => (
          <Grid key={+day} xs item>
            <Day events={eventsByDate[+day]} date={day} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
