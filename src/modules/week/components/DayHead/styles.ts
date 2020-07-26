import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrap: {
    height: theme.spacing(17),
    padding: theme.spacing(),
    boxSizing: "border-box",
  },
  circle: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.spacing(8),
  },
  chipWrap: {
    height: theme.spacing(4),
  },
  chip: {
    marginTop: theme.spacing(),
    background: "#9CC3D5FF",
    paddingRight: theme.spacing(),
    paddingLeft: theme.spacing(),
    height: theme.spacing(2),
    fontSize: 12,
  },
}));
