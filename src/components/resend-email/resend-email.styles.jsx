import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.blueWhite};
  border-radius: 8px;
  width: 496px;
  height: 335px;
`;

export const Thanks = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
`;

export const String = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.redBlack};
`;

export const StyledButton = styled(Button)`
  height: 52px;
  width: 272px;
  background: ${(props) => props.theme.color.blue};
  border: 1px solid ${(props) => props.theme.color.blue};
  border-radius: 8px;
  align-items: center;
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
