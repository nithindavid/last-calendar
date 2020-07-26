import React, { FC, useState } from "react";
import { WeekView } from "./index";

type EventProps = {
  name: String;
  from: Date;
  to: Date;
  color: String;
};

export const WeekViewWithState: FC = (props) => {
  const now = new Date();
  const [startDate, setStartDate] = useState<Date>(now);
  const events: Array<EventProps> = [
    {
      name: "Nithin 25th birthday",
      from: new Date(),
      to: new Date(new Date().setHours(17)),
      color: "red",
    },
  ];

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
        events={events}
        startDate={startDate}
        onPrev={handleOnPrev}
        onNext={handleOnNext}
      />
    </>
  );
};
