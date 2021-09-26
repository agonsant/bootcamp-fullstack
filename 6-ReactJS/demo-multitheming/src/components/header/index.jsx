import { useState, useContext } from "react";
import logo from "../../logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeContext } from "../theme-wrapper";
import { useStyles } from "./styles.js";

export default function Header() {
  const classes = useStyles();
  const {isDark, changeTheme} = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme((prevDark) => !prevDark); // cambiamos el check del boton del tema
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <Typography variant="h6" className={classes.title}>
          Demo
        </Typography>
        <Switch
          checked={isDark}
          onChange={handleChangeTheme}
          color="secondary"
        />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
