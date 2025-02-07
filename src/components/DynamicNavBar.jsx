import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Banner from "../assets/banner.svg";
import { useAuth } from "./AuthContext";
import background from "../assets/background.svg"

const DynamicNavbar = () => {
  const location = useLocation();
  const { user } = useAuth()

  // Cambia el estilo dinámicamente según la ruta actual
  const getBackgroundStyle = () => {
    if (location.pathname === "/home") {
      return {
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      };
    } else {
      return {
        backgroundImage: `url(${background})`,
        height: "130px",
        backgroundSize: "cover",

      };
    }
  };

  return (
    <AppBar
      position="relative"
      sx={{
        ...getBackgroundStyle(),
        color: "white",
        boxShadow: "none",
        paddingBlockStart: '1rem',
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Menú de navegación superior */}
        {console.log('USER EN NAV ', user)}
        <Box sx={{
          display: "flex",
          gap: "2rem",
        }}>
          <Typography variant="body2" component="div">
            Movies
          </Typography>
          <Typography
            button
            component={Link}
            to='/series'
            sx={{
              color: "white",
              display: 'flex',
              gap: '1rem',
              '&:hover': {
               
                color: 'orange'
              },}}
              variant="body2" >
              Series
          </Typography>
        <Typography variant="body2" component="div">
          Documentaries
        </Typography>
      </Box>

      {/* Iconos a la derecha */}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem"
      }}>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          {user ? (
            <img src={user.photoURL}
              alt={"User Avatar"}
              style={{ borderRadius: '50%' }}
              height='40px'
            />
          ) : (
            <img src="https://via.placeholder.com/40" alt="avatar" />
          )}
        </IconButton>
        <Typography variant="body2">{user ? user.displayName : null}</Typography>
      </Box>
    </Toolbar>
    </AppBar >
  );
};

export default DynamicNavbar;