import React, { FC, ReactElement, useContext } from "react";
import "./Navbar.css";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import AuthContext, { AuthContextType } from "../context/AuthContext";
import Payment from "../pages/Payment";
const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const auth = useContext(AuthContext) as AuthContextType;
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Online order App
          </Typography>
          {/* add menu for mobile */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Online order App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              {routes.map((page: any) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="white"
                  aria-label={page.title}
                  underline="none"
                  variant="button"
                  sx={{ fontSize: "large", marginLeft: "2rem" }}
                >
                  {page.title}
                </Link>
              ))}
              {auth.isLoggedIn && (
                <>
                  <Link
                    //   key={page.key}
                    component={NavLink}
                    to={"/payment"}
                    color="white"
                    aria-label={"Payment"}
                    underline="none"
                    variant="button"
                    sx={{ fontSize: "large", marginLeft: "2rem" }}
                  >
                    {"Payment"}
                  </Link>
                  <Link
                    //   key={page.key}
                    component={NavLink}
                    to={"/logout"}
                    color="white"
                    aria-label={"Logout"}
                    underline="none"
                    variant="button"
                    sx={{ fontSize: "large", marginLeft: "2rem" }}
                  >
                    {"Logout"}
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
