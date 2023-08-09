import {
  Card,
  CardContent,
  Chip,
  Typography,
  Button,
  Divider,
  CircularProgress,
  CardMedia,
} from "@mui/material";
import React, { useContext } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ThemeContext } from "../../data/ThemeContext";
function CustomCard({ card }) {
  const { dark } = useContext(ThemeContext)
  return (
    <Card
      sx={{
        background: dark ? "#fff" : "#1A1331",
        boxShadow: "0px 0px 50px 1px rgba(0,0,0,0.05)",
        border: dark ? "solid 1px #E7E7E7" : "none",
        height: "100%",
        borderRadius: "10px",
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "900", flexGrow: 1, color: dark ? "#000" : "#Fff" }}>
          {card.card_title}
        </Typography>
        {card.link ? (
          <Typography component={"a"} href="/" style={{ color: "#8D3FF1" }}>
            {card.link_name} <OpenInNewIcon />
          </Typography>
        ) : (
          <></>
        )}
      </CardContent>
      <Divider color={dark ? "" : "#502289"} />
      {card.data ? (
        card.data_type === "progress" ? (
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              flexDirection: "column",
            }}
          >
            <CircularProgress
              variant="determinate"
              sx={{ position: "absolute", color: dark ? "#E9E9E9" : "#160C22" }}
              size={100}
              thickness={10}
              value={100}
            />
            <CircularProgress
              variant="determinate"
              size={100}
              thickness={10}
              sx={{ color: dark ? "#4DD41F" : "#8D3FF1" }}
              value={card.data_value}
            />
            <Typography sx={{ position: "absolute", color: "#8D3FF1" }}>
              {card.data_value + "%"}
            </Typography>
          </CardContent>
        ) : card.data_type === "number" ? (
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{ fontSize: "50px", fontWeight: 900, color: "#8D3FF1  " }}
            >
              {card.data_value}
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "#B1B1B1" }}>
              Data
            </Typography>
          </CardContent>
        ) : card.data_type === "text" ? (
          <CardContent sx={{ color: dark ? "" : "#D4BCF1" }}>{card.data_value}</CardContent>
        ) : card.data_type === "image" ? (
          <CardMedia component={"img"} src={card.data_value} />
        ) : card.data_type === "tags" ? (
          <CardContent>
            {card.data_value.map((tagsString, index) => {
              const tagsArray = tagsString.split(",").map((tag) => tag.trim());
              return (
                <div key={index}>
                  {tagsArray.map((tag, subIndex) => (
                    <Chip
                      key={subIndex}
                      label={tag}
                      variant="outlined"
                      color="primary"
                      style={{ marginRight: "5px" }}
                    />
                  ))}
                </div>
              );
            })}
          </CardContent>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {card.button ? (
        <CardContent>
          <Button sx={{ boxShadow: "none" }} variant="contained">
            {card.button_name}
          </Button>
        </CardContent>
      ) : (
        ""
      )}

      <Divider color={dark ? "" : "#502289"} />
      <CardContent>
        {card.note ? (
          <Typography sx={{ color: "#C7C8C8" }}>{card.note}</Typography>
        ) : (
          <Typography sx={{ color: "#C7C8C8" }}>Empty</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default CustomCard;
