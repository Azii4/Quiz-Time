import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);

    if (name === "") {
      setNameError(true);
    }
    if (name) {
      console.log(name);
    }
  };

  return (
    <Container size="sm">
      <Typography variant="h1" color="textPrimary" align="center">
        Quiz Time
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={nameError}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          align="center"
          fullWidth
        >
          PLAY
        </Button>
      </form>
      <Button
        href="/leaderboard"
        className={classes.field}
        type="submit"
        variant="contained"
        color="primary"
        align="center"
        fullWidth
      >
        LEADERBOARD{" "}
      </Button>
    </Container>
  );
}
