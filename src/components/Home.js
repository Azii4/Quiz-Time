import React, { useState } from "react";
import {
  MenuItem,
  Select,
  FormControl,
  TextField,
  Container,
  ButtonGroup,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
  },
  formControl: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [category, setCategory] = useState("all");
  const [button, setButton] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);

    if (name === "") {
      setNameError(true);
    }

    if (name) {
      console.log(name, category);
    }
  };

  return (
    <Container size="sm">
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

        <FormControl variant="filled" className={classes.formControl} fullWidth>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Categories"
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="movies">Movies</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="videoGames">Video Games</MenuItem>
            <MenuItem value="history">History</MenuItem>
            <MenuItem value="geography">Geography</MenuItem>
            <MenuItem value="animals">Animals</MenuItem>
          </Select>
        </FormControl>

        <ButtonGroup
          value={button}
          onClick={(e) => setButton(e.target.value)}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          fullWidth
          label="Buttons"
        >
          <Button value="standard" type="submit">
            STANDARD
          </Button>
          <Button value="timeAttack" type="submit">
            TIME ATTACK
          </Button>
        </ButtonGroup>
      </form>

      <Button
        href="/leaderboard"
        className={classes.btn}
        type="submit"
        variant="contained"
        color="primary"
        align="center"
        fullWidth
      >
        LEADERBOARD
      </Button>
    </Container>
  );
}
