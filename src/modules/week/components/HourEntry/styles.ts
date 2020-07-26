import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  hourWrap: {
    height: theme.spacing(8),
    boxSizing: "border-box",
    width: "100%",
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  eventPaper: {
    height: "100%",
    paddingTop: theme.spacing(),
    boxSizing: "border-box",
    borderLeft: `1px solid ${theme.palette.common.white}`,
    fontSize: 12,
  },
  gridContainer: {
    height: "100%",
    alignItems: "stretch",
    flexWrap: "nowrap",
  },
}));
