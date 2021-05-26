import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { ButtonGroup, FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
});

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [category, setCategory] = useState("all");

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

        <FormLabel className={classes.field}>Choose Category</FormLabel>
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="All Categories"
          />
          <FormControlLabel value="movies" control={<Radio />} label="Movies" />
          <FormControlLabel value="music" control={<Radio />} label="Music" />
          <FormControlLabel
            value="video games"
            control={<Radio />}
            label="Video Games"
          />
          <FormControlLabel
            value="history"
            control={<Radio />}
            label="History"
          />
          <FormControlLabel
            value="geography"
            control={<Radio />}
            label="Geography"
          />
          <FormControlLabel
            value="animals"
            control={<Radio />}
            label="Animals"
          />
        </RadioGroup>

        <FormControl variant="filled" className={classes.formControl} fullWidth>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Categories"
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="movies">Movies</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="videoGames">Video Games</MenuItem>
          </Select>
        </FormControl>

        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          fullWidth
        >
          <Button type="submit">STANDARD GAME</Button>
          <Button type="submit">TIME ATTACK GAME</Button>
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
