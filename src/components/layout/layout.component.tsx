import React from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  LoginButton,
  SignUpButton,
  MenuItem,
  Header,
  CompanyName,
  Copyright,
  Heading,
  String
} from './layout.styles'

import styles from './layout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <div className={styles.layoutWrapper}>
      <Grid container spacing={2}>
        <Grid item container md={12}>
          <Header position="static" color="inherit">
            <Toolbar>
              <div className={styles.logoWrapper}>
                  <Typography classes={{ root: styles.logo }} variant="h5" color="inherit">
                    <div className={styles.logoImage} />
                    <MenuItem>Home</MenuItem>
                    <MenuItem>News</MenuItem>
                    <MenuItem>About</MenuItem>
                  </Typography>
              </div>
              <div style={{marginRight: '165px'}}> 
                <LoginButton style={{marginRight: '14px'}}>Login</LoginButton>
                <SignUpButton>Signup</SignUpButton>
              </div>
            </Toolbar>
          </Header>
        </Grid>
        <Grid
          item
          container
          md={12}
          justifyContent="center"
          className={styles.mainComponent}
        >
          {children}
        </Grid>
        <Grid item container md={12} direction="column">
          <AppBar component="footer" classes={{ root: styles.footer }} position="static">
            <Toolbar>
              <Grid container spacing={1}>
                <Grid          
                  container
                  item
                  direction="column"
                  xs
                  alignItems="flex-end"
                >
                  <Typography color="inherit" variant="body2">
                    <div className={styles.companyColumn}>
                      <CompanyName>I-TAPP</CompanyName>
                      <Copyright>Copyright © 2021 I-TAPP</Copyright>
                      <Copyright>All rights reserved</Copyright>
                    </div>
                  </Typography>
                </Grid>
                <Grid           
                  container
                  item
                  direction="column"
                  xs
                  alignItems="flex-end"
                >
                  <Typography color="inherit" variant="body2">
                      <div className={styles.companyInfoColumn}>
                        <Heading>Company</Heading>
                        <String>Home</String>
                        <String>About I-TAPP</String>
                        <String>News</String>
                        <String>Terms and Conditions</String>
                        <String>Privacy Policy</String>
                      </div>
                  </Typography>
                </Grid>
                <Grid           
                  container
                  item
                  direction="column"
                  xs
                  alignItems="flex-start"
                >
                  <Typography color="inherit" variant="body2">
                      <div className={styles.jobsColumn}>
                        <Heading>Jobs</Heading>
                        <String>For Candidates</String>
                        <String>For Employers</String>
                        <String>For Headhunters</String>
                      </div>
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
