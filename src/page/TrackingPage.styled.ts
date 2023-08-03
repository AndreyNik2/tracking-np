import styled from "@emotion/styled";
import { Typography, TextField, Button, Box } from "@mui/material";

export const Main = styled.main`
  display: flex;
  align-items: center;
  width: 375px;
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

export const FlexContainerInfo = styled(Box)`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    justify-content: center;
    
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ContainerInfo = styled(Box)`
  width: 313px;
  min-height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #999999;
  @media screen and (min-width: 768px) {
    display: inline-flex;
    width: calc((100% - 60px/2));
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const BtnNumber = styled(Button)`
  width: 100%;
  &:not(last-child) {
    margin-bottom: 10px;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;