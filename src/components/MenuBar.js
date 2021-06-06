import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      fontSize: 12,
    },
  },
}));

const MenuBar = () => {
  const menu = "Menu goes here";
  const classes = useStyles();
  return (
    <div>
      <div className="button-container">
        <button>Home</button>
        <button>About Alex</button>
        <button>Photo Gallery</button>
        <button>Why?</button>
        <button>Know Drugs</button>
        <button>You are Powerful</button>
        <button>Resources</button>
        <button>Blog</button>
      </div>
    </div>
  );
};

export default MenuBar;
