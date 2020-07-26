import React, { FC } from "react";
import { Week } from "modules/week/components/Week";
import { Header } from "modules/week/components/Header";

type EventProps = {
  name: String;
  from: Date;
  to: Date;
  color: String;
};

type WeekViewProps = {
  startDate: Date;
  events: Array<EventProps>;
  onNext: Function;
  onPrev: Function;
};

export const WeekView: FC<WeekViewProps> = (props) => {
  const {
    startDate = new Date(),
    events = [],
    onPrev = () => {},
    onNext = () => {},
  } = props;
  return (
    <>
      <Header onNext={onNext} onPrev={onPrev} />
      <Week events={events} startDate={startDate} />
    </>
  );
};
