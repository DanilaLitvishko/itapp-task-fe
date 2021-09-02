import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const Window = styled.div`
  width: 496px;
  height: 684px;
  background: ${(props) => props.theme.color.blueWhite};
  border-radius: 8px;
`;

export const AntTabs = styled(({ className, ...other }) => {
  return (
    <Tabs
      {...other}
      classes={{
        root: className,
        flexContainer: "flexContainer",
        indicator: "indicator",
      }}
      variant="fullWidth"
      TabIndicatorProps={{ children: <span /> }}
      centered
    />
  );
})({
  "& .MuiTabs-root": {
    borderBottom: "1px solid black",
  },
  "& .indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 200,
      width: "100%",
      backgroundColor: "blue",
    },
  },
  "& .flexContainer": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontFamily: theme.fontFamily,
    fontStyle: theme.fontStyle,
    fontWeight: "bold",
    fontSize: "18px",
    color: theme.color.gray,
    borderBottom: `1px solid ${theme.color.redWhite}`,
    "&.MuiTab-textColorInherit.Mui-selected": {
      color: theme.color.blue,
    },
  },
}))((props) => <Tab disableRipple {...props} />);
