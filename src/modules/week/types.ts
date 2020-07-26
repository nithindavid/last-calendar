export type EventProps = {
  id: String;
  name: String;
  color: String;
  from: Date;
  to: Date;
};

export type WeekProps = {
  startDate: Date;
  eventsByDate: { [date: number]: EventProps[] };
};
