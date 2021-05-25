import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  CenterFocusStrong,
  CenterFocusStrongOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles({
  page: {
    background: "#00FFFF",
    width: "40%",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.page}>{children}</div>
    </div>
  );
}
