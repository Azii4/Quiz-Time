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
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
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

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});

export default function Standard() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
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
          {loadStandard().map((standard) => (
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
    </TableContainer>
  );
}
