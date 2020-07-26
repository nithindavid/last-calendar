import { useMemo } from "react";

export const useHourEntries = (date: Date) =>
  useMemo(() => {
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
  }, [+date]);
