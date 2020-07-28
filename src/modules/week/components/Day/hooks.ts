import { useMemo, useCallback } from "react";
import { EventProps } from "modules/week/types";

const resetHourForDate = (date: Date) =>
  new Date(new Date(date).setHours(new Date(date).getHours(), 0, 0, 0));

export const useHourEntries = (date: Date) => {
  const dependancy = `${date.getHours()}${date.getMinutes()}`;
  return useMemo(() => {
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

    return hourEntries;
  }, [dependancy]);
};

export const useEventsForHour = (events: EventProps[]) =>
  useCallback(
    (hourInDate: Date) =>
      events.filter((event) => {
        const fromHour = resetHourForDate(event.from);
        const toHour = resetHourForDate(event.to);

        return +fromHour <= +hourInDate && +hourInDate <= +toHour;
      }),
    [events]
  );
