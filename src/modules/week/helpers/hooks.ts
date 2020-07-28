import { useMemo } from "react";
import { EventProps } from "modules/week/types";

import { getEventsByDate } from "./transformers";

export const useEventsByDate = (events: Array<EventProps>) => {
  return useMemo(() => getEventsByDate(events), [events]);
};
