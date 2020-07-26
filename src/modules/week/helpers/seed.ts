import { EventProps } from "modules/week/types";

// eslint-disable-next-line no-extend-native
const addDays = (date: Date, days: any = 0) => {
  var currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
};

const addHours = (date: Date, hours: any = 0) => {
  var currentDate = new Date(date);
  currentDate.setHours(currentDate.getHours() + hours);
  return currentDate;
};

const today = new Date();

export const events: Array<EventProps> = [
  {
    id: "random1",
    name: "Nithin 25th birthday",
    from: new Date(today),
    to: addHours(addDays(today, 1), 18),
    color: "#FCCFF4",
  },
  {
    id: "random2",
    name: "Juan 25th birthday",
    from: new Date(today),
    to: addHours(addDays(today, 1), 19),
    color: "#B4F1B3",
  },
  {
    id: "random1",
    name: "Nithin 25th birthday",
    from: addHours(addDays(today, 2), 2),
    to: addHours(addDays(today, 2), 18),
    color: "#F2B6AE",
  },
  {
    id: "random2",
    name: "Juan 25th birthday",
    from: addDays(today, 3),
    to: addHours(addDays(today, 4), 18),
    color: "#F7F3CD",
  },
  {
    id: "random1",
    name: "Nithin 25th birthday",
    from: addHours(addDays(today, 5), 8),
    to: addHours(addDays(today, 7), 18),
    color: "#A6D5FD",
  },
  {
    id: "random2",
    name: "Juan 25th birthday",
    from: addHours(addDays(today, 6), 8),
    to: addHours(addDays(today, 7), 18),
    color: "#BCB0EE",
  },
];
