import styled from "styled-components";
import { AppBar, Button } from "@material-ui/core";

export const LoginButton = styled(Button)`

  margin-right: 14px;

  &.MuiButtonBase-root{
    border: 1px solid ${(props) => props.theme.color.blue};
    border-radius: 8px;
  }
  height: 40px;
  width: 100px;
  align-items: center;
  &.MuiButtonBase-root{
    border: 1px solid ${(props) => props.theme.color.blue};
    border-radius: 8px;
  }
  & .MuiButton-label {
    width: 38px;
    height: 20px;
    font-family: ${(props) => props.theme.fontFamily};
    font-style: ${(props) => props.theme.fontStyle};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.color.blue};
  }
  &.MuiButton-root {
    text-transform: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.white};
  }
`;

export const SignUpButton = styled(Button)`
  height: 40px;
  width: 100px;
  border-radius: 8px;
  background: ${(props) => props.theme.color.blue};
  border: 1px solid ${(props) => props.theme.color.blue};
  align-items: center;
  &.MuiButtonBase-root{
    border-radius: 8px;
    background: ${(props) => props.theme.color.blue};
    border: 1px solid ${(props) => props.theme.color.blue};
  }
  & .MuiButton-label {
    width: 51px;
    height: 20px;
    font-family: ${(props) => props.theme.fontFamily};
    font-style: ${(props) => props.theme.fontStyle};
    font-weight: bold;
    font-size: 14px;
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

export const MenuItem = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.gray};
  margin: 40px 32px 32px;
`;

export const Header = styled(AppBar)`
  border-bottom: 1px solid ${(props) => props.theme.color.grayWhite};
  &.MuiPaper-elevation4{
    box-shadow: none;
  }
`

export const CompanyName = styled.div`
  width: 109px;
  height: 37px;
  margin-bottom: 40px;
  font-family: Montserrat;
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 900;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.gray};
`;

export const Copyright = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.moreBlueWhite};
`;

export const Heading = styled.div`
  width: 160px;
  height: 30px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.white};
`;

export const String = styled.div`
  width: 200px;
  height: 26px;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  font-feature-settings: "liga" off;
  padding: 6px;
  color: ${(props) => props.theme.color.moreBlueWhite};
`;