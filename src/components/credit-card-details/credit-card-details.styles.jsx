import styled from 'styled-components'
import { TextField, Button } from "@material-ui/core";

export const MainContainer = styled.div`
    width: 994px;
    height: 508px;

    background: #F5F7FA;
    border-radius: 8px;
`

export const CreditCardDetailsString = styled.div`
    width: 228px;
    height: 22px;

    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;

    color: #000000;

    margin-bottom: 28px;
`

export const Input = styled(TextField)`
    width: 454px;
    height: 47px;
    border-radius: 8px;
    background: ${(props) => props.theme.color.white};
    & .MuiOutlinedInput-root {
        border-radius: 8px;
    }

    & .MuiOutlinedInput-input{
        padding: 14.5px 14px;
    }
`;

export const CardNumber = styled.div`
    width: 454px;
    height: 47px;

    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 15px 10px;
`

export const Container = styled.div`
    width: 217px;
    height: 47px;

    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: ${(props) => props.margin};
    padding: 15px 12px;
`

export const PaymentButton = styled(Button)`
    width: 454px;
    height: 47px;
    margin-top: 28px;
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

export const SubscriptionInfoContainer = styled.div`
    margin-top: 96px;
    margin-left: 42px;
    width: 330px;
    height: 338px;

    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 8px;
`

export const SubscriptionString = styled.div`
    margin-top: 16px;
    margin-left: 20px;

    width: 83px;
    height: 30px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: #2E1AAD;
`

export const MonthlyString = styled.div`
    width: 66px;
    height: 22px;

    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
    margin-left: 20px;
    margin-top: 5px;
`

export const CostString = styled.div`
    width: 89px;
    height: 30px; 

    font-family: Rubik;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    text-align: center;

    color: #0B132A;
    margin-right: 21px;
`

export const Line = styled.div`
    margin-top: 16px;
    margin-left: 20px;
    margin-bottom: 21px;
    width: 286px;
    height: 1px;

    background: #C4C4C4;
`

export const BenefitsString = styled.div`
    height: 30px; 

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;

    color: #231F20;

`