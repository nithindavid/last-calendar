import { EventProps } from "modules/week/types";

// Groups the serial list of events by the date so that events spanning
// over days can be easily mapped. { dateTimestamp : [ event1, event2] }

export const getEventsByDate = (events: Array<EventProps>) =>
  events.reduce((acc: { [date: string]: any }, event) => {
    const fromDate = new Date(event.from);
    const toDate = new Date(event.to);

    var currentDate = new Date(fromDate);
    while (currentDate <= toDate) {
      const curDateString = +currentDate.setHours(0, 0, 0, 0);
      const dateObj = acc[curDateString];

      if (dateObj) {
        acc[curDateString].push(event);
      } else {
        acc[curDateString] = [event];
      }

      currentDate = currentDate.addDays(1);
    }
    return acc;
  }, {});
