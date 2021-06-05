import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
  },
  table: {
    minWidth: "100%",
  },
});

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

function loadStandard() {
  let aValue = localStorage.getItem("Standard LeaderBoard");

  if (aValue == null) {
    return [];
  } else {
    return JSON.parse(aValue);
  }
}

function loadSortedStandard() {
  let sortedStandard = loadStandard();
  sortedStandard.sort((a, b) => b.Score - a.Score);
  return sortedStandard;
}
function clearStandard() {
  console.log("tehe");
  localStorage.removeItem("Standard LeaderBoard");
}

loadSortedStandard();
export default function Standard() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loadSortedStandard().map((standard) => (
            <StyledTableRow key={standard.name}>
              <StyledTableCell component="th" scope="row">
                {standard.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                {standard.Category}
              </StyledTableCell>
              <StyledTableCell align="center">{standard.Date}</StyledTableCell>
              <StyledTableCell align="center">{standard.Score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        value="clearLeaderboard"
        type="submit"
        onClick={clearStandard}
        fullWidth
      >
        clear Leaderboard
      </Button>
    </TableContainer>
  );
}
