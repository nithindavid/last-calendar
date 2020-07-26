import { useMemo } from "react";

export const useDaysOfWeek = (startDate: Date) =>
  useMemo(() => {
    const startOfWeek = new Date(startDate);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    const startOfWeekDate = startOfWeek.getDate();

    endOfWeek.setHours(0, 0, 0, 0);
    endOfWeek.setDate(startOfWeekDate + 7);

    const dayEntries: Date[] = [];
    const eachDay = new Date(startOfWeek);

    while (eachDay < endOfWeek) {
      dayEntries.push(new Date(eachDay));

      const currentDay = eachDay.getDate();
      const nextDay = currentDay + 1;
      eachDay.setDate(nextDay);
    }
    return dayEntries;
  }, [startDate]);
