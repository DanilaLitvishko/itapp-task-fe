import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Window, Thanks, LoginButton, Login } from "./activate-email.styles";
import { confirmEmail } from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";

export const ActivateEmail = () => {
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(confirmEmail(params.confirmationCode));
  }, [dispatch, params.confirmationCode]);

  return (
    <Window>
      <Thanks>You confirmed your email</Thanks>
      <LoginButton>
        <Login to="/">Go to login</Login>
      </LoginButton>
    </Window>
  );
};

export default ActivateEmail;
