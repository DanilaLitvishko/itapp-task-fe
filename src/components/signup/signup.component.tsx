import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  Input,
  Label,
  Text,
  SignUpButton,
  StyledCheckBox,
  useStyles,
} from "./signup.styles";
import SignUpSchema from "./signup.validation-schema";
import { signUpStart } from "../../redux/user/user.actions";
import { selectError, selectLoading } from "../../redux/user/user.selectors";
import DialogError from "../dialog-error/dialog-error.component";
import { UserPayload } from "../../interfaces/user-payload.interface";
import { AxiosError } from "axios";

const SignUp = () => {
  const classes = useStyles();

  const loading = useSelector(selectLoading);
  const error: AxiosError = useSelector(selectError);

  const [signUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (error && isRegistered && !loading) {
      setOpen(true);
    }

    if (isRegistered && !error && !loading) {
      setSignUp(true);
    }
  }, [loading, error, isRegistered]);

  const { handleSubmit, handleChange, getFieldProps, values, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values: UserPayload) => {
        dispatch(signUpStart(values));
        setIsRegistered(true);
      },
      validationSchema: SignUpSchema,
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
        <Grid item>
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
        <Grid item>
          <Label>Confirm Password</Label>
        </Grid>
        <Grid item>
          <Input
            {...getFieldProps("confirmPassword")}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={values.confirmPassword}
            placeholder="Confirm password"
            variant="outlined"
            error={Boolean(errors.confirmPassword)}
          />
        </Grid>
        <Grid item className={classes.text}>
          <StyledCheckBox/>
          <Text>
            By creating an account you agree to the terms and conditions
            applicable to our service and acknowledge that your personal data
            will be used in accordance with our privacy policy and you will
            receive emails and communications about jobs, industry news, new
            products and related topics.
          </Text>
        </Grid>
        <SignUpButton type="submit">Sign up</SignUpButton>
        {signUp ? (
          <Redirect
            to={{
              pathname: "/resendEmail",
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
      </Grid>
    </form>
  );
};

export default SignUp;
