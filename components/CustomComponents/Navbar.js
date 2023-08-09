import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ThemeContext } from "../../data/ThemeContext";
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
function Navbar() {
 const {dark ,setDark} = useContext(ThemeContext)
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)" }}
    >
      <Toolbar sx={{ background: (dark)?"#fff" :"#1A1331", gap: "10px" }}>
        <Typography
          sx={{
            display: { xs: "block", md: "none" },
            color: "#8D3FF1",
            fontSize: "20px",
            fontWeight: "900",
          }}
        >
          Logo
        </Typography>
        <span style={{ flex: 1 }} />

        <IconButton sx={{ background:(dark)?"#FFFBCD" :"#343434" }} onClick={()=>{setDark(!dark)}}>
          {dark?
          <FlareOutlinedIcon sx={{ color: "#FF9034" }} />
          :
          <NightsStayIcon sx={{ color: "#fff" }} />
          }
          </IconButton>

        <IconButton>
          <Badge overlap="circular" color="warning" variant="dot">
            <NotificationsNoneIcon sx={{ color: "#8D3FF1" }} />
          </Badge>
        </IconButton>

        <Avatar
          sx={{
            background: "#EEE1FD",
            "&:hover": { border: "2px solid #8D3FF1" },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
