import React, { FC, useState } from "react";

import { useEventsByDate } from "modules/week/helpers/hooks";
import { events } from "modules/week/helpers/seed";
import { WeekView } from "modules/week/";

export const WeekViewWithState: FC = (props) => {
  const now = new Date();
  const [startDate, setStartDate] = useState<Date>(now);
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
