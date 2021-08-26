import React, { useState } from "react";

import { Window, AntTab, AntTabs } from "./auth.styles";
import SignUp from "../signup/signup.component";
import Login from "../login/login.component";
import TabPanel from "../tab-panel/tab-panel.component";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tabsContainer: {
    paddingLeft: "24px",
    paddingRight: "24px",
  },
});

const Auth = () => {
  const classes = useStyles();

  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Window>
      <div className={classes.tabsContainer}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Login" />
          <AntTab label="Sign up" />
        </AntTabs>
      </div>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </Window>
  );
};

export default Auth;
