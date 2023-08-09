import { Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function getRandomColor() {
  const colorKeys = Object.keys(gdColor);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  const randomColorKey = colorKeys[randomIndex];
  return gdColor[randomColorKey];
}

const gdColor = {
  color1 : "linear-gradient(90deg, rgba(173,153,199,1) 0%, rgba(141,63,241,1) 35%, rgba(175,140,219,1) 100%)",
  color2 :  "linear-gradient(90deg, rgba(173,153,199,1) 0%, rgba(241,63,213,1) 35%, rgba(175,140,219,1) 100%)",
  color3 :  "linear-gradient(90deg, rgba(173,153,199,1) 0%, rgba(63,96,241,1) 35%, rgba(175,140,219,1) 100%)"
}
const Banner = ({ bannersData }) => {
  const [currentColor, setCurrentColor] = useState(gdColor.color1);

  function getRandomColor() {
    const colorKeys = Object.keys(gdColor);
    const randomIndex = Math.floor(Math.random() * colorKeys.length);
    const randomColorKey = colorKeys[randomIndex];
    return gdColor[randomColorKey];
  }

  const handleCarouselChange = () => {
    setCurrentColor(getRandomColor());
  };

  return (
    <Card sx={{boxShadow:"none",background: currentColor}}>
      <Carousel showThumbs={false} autoPlay infiniteLoop  onChange={handleCarouselChange}>
        {bannersData?.map((banner) => (
          <div key={banner.id}>
            <CardContent sx={{display:"flex",padding:"50px 0px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <Typography variant="h6" sx={{fontSize:{md:"2rem",xs:"1rem"},color:"#fff"}}>{banner.text}</Typography>
              {banner.button?
              <Button variant="outlined" color="inherit" >{banner.btn_name}</Button>  
              :
              ""}
            </CardContent>
          </div>
        ))}
      </Carousel>
    </Card>
  );
};

export default Banner;
