import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Label = styled.label`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 800;
  font-size: 12px;
  line-height: 22px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.gray};
`;

export const Input = styled(TextField)`
  height: 54px;
  width: 400px;
  border-radius: 8px;
  background: ${(props) => props.theme.color.white};
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
`;

export const LoginButton = styled(Button)`
  height: 52px;
  width: 400px;
  border-radius: 8px;
  align-items: center;
  &.MuiButtonBase-root{
    border-radius: 8px;
    background: ${(props) => props.theme.color.blue};
    border: 1px solid ${(props) => props.theme.color.blue};
  }
  & .MuiButton-label {
    font-family: ${(props) => props.theme.fontFamily};
    font-style: ${(props) => props.theme.fontStyle};
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: ${(props) => props.theme.color.white};
  }
  &.MuiButton-root {
    text-transform: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.blue};
  }
`;

export const SignUpTextInButton = styled.div`
  width: 58px;
  height: 20px;

  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: "liga" off;

  color: ${(props) => props.theme.color.white};
`;

export const useStyles = makeStyles({
  form: {
    marginLeft: "24px",
    marginRight: "24px",
    marginTop: "25px",
  },
  passwordInput: {
    marginBottom: "40px",
  },
});
