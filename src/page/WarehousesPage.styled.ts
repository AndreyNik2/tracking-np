import styled from "@emotion/styled";
import { Typography, TextField, Button, Box } from "@mui/material";

export const MainContainer = styled(Box)`
  margin-top: 16px;
  width: 375px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Title = styled(Typography)`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const Input = styled(TextField)`
  width: 343px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1440px) {
    width: 1000px;
  }
`;

export const Btn = styled(Button)`
  width: 343px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const LocalityContainer = styled(Box)`
  width: 343px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1440px) {
    width: 1000px;
  }
`;

export const BtnCities = styled(Button)`
  display: block;
  margin-top: 5px;
`;

export const BtnWarehouses = styled(Button)`
  display: block;
  margin-top: 5px;
`;

export const NoWarehouseMessage = styled(Typography)`
margin-top: 20px;
  text-align: center;

`;

export const Footer = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  background-color: #ffffff;
`;
