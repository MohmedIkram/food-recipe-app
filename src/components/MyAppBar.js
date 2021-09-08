import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { BackButton } from "./App";
<Router>
  <Switch>
    <Route path="/about">
      <MyAppBar />
      <BackButton />
      this is about page
    </Route>
  </Switch>
  ;
</Router>;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundImage:
            "linear-gradient(to left, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <h3>RECIPIE BOOK</h3>
          </Typography>
          <Typography>{/* <link>Home</link> */}</Typography>
          <Typography>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link to="/addrecipe" style={{ color: "white" }}>
              Add recipie
            </Link>
          </Typography>

          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
