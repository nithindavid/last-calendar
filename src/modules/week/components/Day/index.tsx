import React, { FC, memo } from "react";
import Paper from "@material-ui/core/Paper";

import { HourEntry } from "modules/week/components/HourEntry";
import { DayHead } from "modules/week/components/DayHead";
import { EventProps } from "modules/week/types";

import { useHourEntries } from "./hooks";

type DayProps = {
  date: Date;
  events: Array<EventProps>;
};

export const Day: FC<DayProps> = memo((props) => {
  const { date, events = [] } = props;
  const hourEntries = useHourEntries(date);
  const eventCount = events.length;
  const eventsForDay = (hourInDate: Date) =>
    events.filter(
      (event) => hourInDate >= event.from && hourInDate <= event.to
    );

  return (
    <Paper square>
      <DayHead date={date} count={eventCount} />
      {hourEntries.map((hourInDate) => {
        return (
          <HourEntry
            key={+hourInDate}
            events={eventsForDay(hourInDate)}
            date={hourInDate}
          />
        );
      })}
    </Paper>
  );
});
