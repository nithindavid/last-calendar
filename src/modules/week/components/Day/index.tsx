import React, { FC, memo } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { HourEntry } from "modules/week/components/HourEntry";
import { DayHead } from "modules/week/components/DayHead";

type EventProps = {
  name: String;
  color: String;
  from: Date;
  to: Date;
};
type DayProps = {
  date: Date;
  events: Array<EventProps>;
};

export const Day: FC<DayProps> = memo((props) => {
  const { date, events = [] } = props;

  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const hourEntries = [];
  const eachHourInDay = new Date(startOfDay);
  while (eachHourInDay < endOfDay) {
    hourEntries.push(new Date(eachHourInDay));

    const currentHour = eachHourInDay.getHours();
    const nextHour = currentHour + 1;
    eachHourInDay.setHours(nextHour);
  }

  const eventsForDay = (hourInDate: Date) =>
    events.filter(
      (event) =>
        hourInDate.getHours() >= event.from.getHours() &&
        hourInDate.getHours() <= event.to.getHours()
    );

  return (
    <Paper square>
      <DayHead date={date} />
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
