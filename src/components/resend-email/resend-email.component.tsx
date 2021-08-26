import React from "react";
import { StyledButton, Thanks, Window, String } from "./resend-email.styles";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { resendEmail } from "../../redux/user/user.actions";
import { useLocation } from "react-router-dom";
import { ResendEmailState } from "../../interfaces/resend-email-state.interface";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    marginBottom: "20px",
  },
  textContainer: {
    marginTop: "8px",
  },
  buttonContainer: {
    marginTop: "42px",
  },
}));

const ResendEmail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { state }: ResendEmailState = useLocation();

  const resendEmailConfirmation = () => {
    dispatch(resendEmail(state.email));
  };

  return (
    <Window>
      <Logo className={classes.logoContainer} />
      <Thanks>Thank you for registering</Thanks>
      <String className={classes.textContainer}>
        Please check your email to confirm your account
      </String>
      <StyledButton
        className={classes.buttonContainer}
        onClick={resendEmailConfirmation}
      >
        Resend Email Confirmation
      </StyledButton>
    </Window>
  );
};

export default ResendEmail;
