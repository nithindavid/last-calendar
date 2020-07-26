import React, { FC, memo } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

export const TimeGuide: FC = memo(() => {
  // Generate array numbers from 0...23
  const hourEntries: Array<number> = Array.from(Array(24).keys());
  const classes = useStyles();

  return (
    <Paper className={classes.wrap}>
      {hourEntries.map((hour) => {
        const formatedHour = ("0" + hour).slice(-2);
        return (
          <Box key={formatedHour} className={classes.hourWrap}>
            <Typography color="textSecondary">{`${formatedHour}:00`}</Typography>
          </Box>
        );
      })}
    </Paper>
  );
});
