import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrap: {
    marginTop: theme.spacing(17),
  },
  hourWrap: {
    height: theme.spacing(8),
    boxSizing: "border-box",
    width: theme.spacing(10),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));
