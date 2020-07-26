import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrap: {
    height: 120,
    boxSizing: "border-box",
  },
  circle: {
    height: 40,
    width: 40,
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 64,
  },
}));
