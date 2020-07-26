import React, { FC } from "react";

import { Week } from "modules/week/components/Week";
import { Header } from "modules/week/components/Header";

import { EventProps } from "modules/week/types";
import { MONTHS } from "modules/week/helpers/constants";

type WeekViewProps = {
  startDate: Date;
  eventsByDate: { [date: number]: EventProps[] };
  onNext: Function;
  onPrev: Function;
};

export const WeekView: FC<WeekViewProps> = (props) => {
  const {
    startDate = new Date(),
    eventsByDate = {},
    onPrev = () => {},
    onNext = () => {},
  } = props;

  const currentMonth = MONTHS[startDate.getMonth()];
  return (
    <>
      <Header month={currentMonth} onNext={onNext} onPrev={onPrev} />
      <Week eventsByDate={eventsByDate} startDate={startDate} />
    </>
  );
};
