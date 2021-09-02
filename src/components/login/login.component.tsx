import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { Input, Label, LoginButton, useStyles } from "./login.styles";
import LoginSchema from "./login.validation-schema";
import { login } from "../../redux/user/user.actions";
import { UserPayload } from "../../interfaces/user-payload.interface";
import { selectError, selectLoading } from "../../redux/user/user.selectors";
import { AxiosError } from "axios";
import DialogError from "../dialog-error/dialog-error.component";

const Login = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [wasLogin, setWasLogin] = useState(false);

  const dispatch = useDispatch();
  const error: AxiosError = useSelector(selectError);
  const loading: boolean = useSelector(selectLoading);

  useEffect(() => {
    if (!error && !loading && wasLogin) {
      setIsLogged(true);
    }

    if (error) {
      setOpen(true);
    }
  }, [error, loading, wasLogin]);

  const handleClose = () => {
    setOpen(false);
  };

  const { values, getFieldProps, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values: UserPayload) => {
        dispatch(login(values));
        setWasLogin(true);
      },
      validationSchema: LoginSchema,
    });
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Label>Email</Label>
        </Grid>
        <Grid item>
          <Input
            {...getFieldProps("email")}
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            value={values.email}
            placeholder="email"
            variant="outlined"
            error={Boolean(errors.email)}
          />
        </Grid>
        <Grid item>
          <Label>Password</Label>
        </Grid>
        <Grid item className={classes.passwordInput}>
          <Input
            {...getFieldProps("password")}
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            placeholder="password"
            variant="outlined"
            error={Boolean(errors.password)}
          />
        </Grid>
        <LoginButton type="submit">Login</LoginButton>
      </Grid>
      {isLogged ? (
        <Redirect
          to={{
            pathname: "/completeProfile",
            state: { email: values.email },
          }}
        />
      ) : null}
      {error ? (
        <DialogError
          open={open}
          close={handleClose}
          message={error.response?.data.message}
        />
      ) : null}
    </form>
  );
};

export default Login;
