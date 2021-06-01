import React from "react";
import PropTypes from "prop-types";
import Standard from "./Standard";
import TimeAttack from "./TimeAttack";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBox-root": {
      padding: 0,
    },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    minHeight: 300,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Standard" href="/standard" {...a11yProps(0)} />
          <LinkTab label="Time Attack" href="/timeAttack" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} classes={{ root: classes.tab }}>
        <Standard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TimeAttack />
      </TabPanel>
    </div>
  );
}
