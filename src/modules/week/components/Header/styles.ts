import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.common.white,
  },
  title: {
    flexGrow: 1,
    fontWeight: theme.typography.fontWeightBold,
  },
  nextButton: {
    marginLeft: theme.spacing(),
  },
}));
