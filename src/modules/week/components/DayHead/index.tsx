import React, { FC, memo } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import { DAYS } from "modules/week/helpers/constants";

import { useStyles } from "./styles";

type DayHeadProps = { date: Date; count: Number };

export const DayHead: FC<DayHeadProps> = memo((props) => {
  const { date, count = 0 } = props;
  const classes = useStyles();

  const dayOfWeek = date.getDay();
  const nameOfDay = DAYS[dayOfWeek];
  const dateOfMonth = date.getDate();
  const showChip = count > 0;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
      className={classes.wrap}
    >
      <Typography variant="h6" gutterBottom>
        {nameOfDay}
        {showChip && (
          <Chip color="secondary" size="small" label={`${count} events`} />
        )}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.circle}
      >
        {dateOfMonth}
      </Box>
    </Box>
  );
});
