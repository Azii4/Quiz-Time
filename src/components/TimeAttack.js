import React from "react";
import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  body: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
  },
  table: {
    minWidth: "100%",
  },
});

function loadTimeAttack() {
  let aValue = localStorage.getItem("TimeAttack LeaderBoard");

  if (aValue == null) {
    return [];
  } else {
    return JSON.parse(aValue);
  }
}

function loadSortedTimeAttack() {
  let sortedTimeAttack = loadTimeAttack();
  sortedTimeAttack.sort((a, b) => {
    if (b.Score > a.Score) {
      return 1;
    } else if (b.Score < a.Score) {
      return -1;
    }

    if (b.time > a.time) {
      return -1;
    } else if (b.time < a.time) {
      return 1;
    }

    return 0;
  });
  return sortedTimeAttack;
}

function clearTimeAttack() {
  localStorage.removeItem("TimeAttack LeaderBoard");
  loadSortedTimeAttack();
}

export default function Standard() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loadSortedTimeAttack().map((timed) => (
            <StyledTableRow key={timed.name}>
              <StyledTableCell component="th" scope="row">
                {timed.name}
              </StyledTableCell>
              <StyledTableCell align="center">{timed.Category}</StyledTableCell>
              <StyledTableCell align="center">{timed.Date}</StyledTableCell>
              <StyledTableCell align="center">{timed.time}</StyledTableCell>
              <StyledTableCell align="center">{timed.Score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button value="clearLeaderboard" type="submit" onClick={clearTimeAttack}>
        Clear Leaderboard
      </Button>
    </TableContainer>
  );
}
