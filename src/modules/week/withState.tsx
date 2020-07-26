import React, { FC, useState } from "react";

import { useEventsByDate } from "modules/week/helpers/hooks";
import { WeekView } from "modules/week/";

type EventProps = {
  id: String;
  name: String;
  from: Date;
  to: Date;
  color: String;
};

export const WeekViewWithState: FC = (props) => {
  const now = new Date();
  const [startDate, setStartDate] = useState<Date>(now);
  const today = 1595757219930;
  const events: Array<EventProps> = [
    {
      id: "random1",
      name: "Nithin 25th birthday",
      from: new Date(today),
      to: new Date(new Date(today).setHours(18)),
      color: "#FCCFF4",
    },
    {
      id: "random2",
      name: "Juan 25th birthday",
      from: new Date(today),
      to: new Date(new Date(today).setHours(19)),
      color: "#B4F1B3",
    },
  ];
  const eventsByDate = useEventsByDate(events);

  const handleOnNext = () => {
    const nextWeekStartDate = new Date(startDate);
    const startOfWeekDate = nextWeekStartDate.getDate();
    nextWeekStartDate.setDate(startOfWeekDate + 7);

    setStartDate(nextWeekStartDate);
  };

  const handleOnPrev = () => {
    const prevWeekStartDate = new Date(startDate);
    const startOfWeekDate = prevWeekStartDate.getDate();
    prevWeekStartDate.setDate(startOfWeekDate - 7);

    setStartDate(prevWeekStartDate);
  };
  return (
    <>
      <WeekView
        eventsByDate={eventsByDate}
        startDate={startDate}
        onPrev={handleOnPrev}
        onNext={handleOnNext}
      />
    </>
  );
};
