import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const Header = styled.header`
  border-bottom: 1px solid #999999;
`;

export const NavContainer = styled(Box)`
  display: "flex";
  justify-content: "center";
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;
