import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles.js";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Un texto en el Footer
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Otro texto en el Footer
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
