import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Header, NavContainer } from "./SharedLayout.styled";

export const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <nav>
          <NavContainer
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
          
            <Button
              type="button"
              variant={"contained"}
              component={NavLink}
              to="/"
              sx={{ padding: 1, margin: 2 }}
            >
              Перевірити ТТН
            </Button>
            <Button
              type="button"
              variant={"contained"}
              component={NavLink}
              to="/warehouses"
              sx={{ padding: 1, margin: 2 }}
            >
              Список відділень
            </Button>
          </NavContainer>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
