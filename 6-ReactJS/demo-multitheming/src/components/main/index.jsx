import CardExample from "../card-example";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles.js";

export default function Main() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Grid container direction="row" justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <CardExample></CardExample>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardExample></CardExample>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardExample></CardExample>
        </Grid>
      </Grid>
    </main>
  );
}
