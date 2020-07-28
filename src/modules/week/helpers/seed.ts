import { EventProps } from "modules/week/types";

// eslint-disable-next-line no-extend-native
const addDays = (date: Date, days: any = 0) => {
  var currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + days);
  return new Date(currentDate);
};

const addHours = (date: Date, hours: any = 0) => {
  var currentDate = new Date(date);
  currentDate.setHours(currentDate.getHours() + hours);
  return new Date(currentDate);
};

const today = new Date();

export const events: Array<EventProps> = [
  {
    id: "random1",
    name: "Nithin 25th birthday",
    from: new Date(today),
    to: addHours(today, 1),
    color: "#F2B6AE",
  },
  {
    id: "random1222",
    name: "Interview with Jan",
    from: new Date(today),
    to: addHours(today, 2),
    color: "#FCCFF4",
  },
  {
    id: "random2",
    name: "Juan 25th birthday",
    from: addDays(today, 1),
    to: addHours(addDays(today, 1), 3),
    color: "#B4F1B3",
  },
  {
    id: "random15",
    name: "Nithin 25th birthday",
    from: new Date(1596163030665),
    to: new Date(1596173030665),
    color: "#F2B6AE",
  },
];
