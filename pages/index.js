import React, { useState, useEffect } from 'react';
import Banner from '../components/CustomComponents/Banner';
import Navbar from '../components/CustomComponents/Navbar';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import Sidebar from '../components/CustomComponents/sidebar';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CustomCard from '../components/CustomComponents/CusotmCard';
import { ThemeContext } from '../data/ThemeContext';
import LoadingPage from '../components/CustomComponents/LoadingPage';


export default function Home({ initialData }) {
  const [data, setData] = useState(initialData);
  const [Copydata, setCopyData] = useState(data);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sectionNo , setSectioNo]= useState(1)
  const [SeeMore , setSeeMore]= useState(3)
  const [dark ,setDark] = useState(true)
  const [loading ,setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
  
        if (jsonData) setData(jsonData.data);
      
          
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(()=>{
      if(data){
        onChangeCardItems(1)
      }
  },[data])

  const onChangeCardItems =(k)=>{
      if(k){
        console.log("ss")
        setSectioNo(k)
        setCopyData(data.cards?.filter((a) => a.parent_sec_no === k))
        setSeeMore(3)
      }
  }


  useEffect(()=>{

    setTimeout(()=>{
        setLoading(false)
    },200)

  })

  if(!data || loading){
    return <LoadingPage/>  
  }


  return (
    <ThemeContext.Provider value={{onChangeCardItems,sectionNo,dark ,setDark}}>
    <Box display="flex" sx={{background:dark?"#fff":"#17082A"}}>  
      <Sidebar open={sidebarOpen} sections={data? data.sections: []}
      butn={<IconButton 
        sx={{transform:(sidebarOpen)?"rotate(180deg)":"rotate(0deg)"}}
        onClick={() =>setSidebarOpen(!sidebarOpen)}><DoubleArrowIcon sx={{color:"#A539FF"}}/></IconButton>}
      />
      <Box  sx={{minHeight:"100vh"}} flexGrow={1}>
        <Navbar />
        <Box sx={{padding:"10px"}}> 
        {data && <Banner bannersData={data.banners} />}
          <Box  sx={{padding:"20px",display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
              <Typography variant="h6" sx={{fontSize:{md:"25px",xs:"20px"},color:dark?"#0C0C0C":"#fff"}}>Section {sectionNo}</Typography>
              <Box
              sx={{padding:"2px",background:"#FFC9E9",height:"1px",borderRadius:"50px",width:"50%"}}
              component={"span"}
              /> 
              <Box
              sx={{padding:"2px",background:"#FF60BE",height:"5px",borderRadius:"50px",width:"10%"}}
              component={"span"}
              /> 
               <Box
              sx={{padding:"2px",background:"#FF0097",height:"2px",borderRadius:"50px",width:"5%"}}
              component={"span"}
              />
               <Box
              sx={{padding:"2px",background:"#FF0097",height:"5px",borderRadius:"100px",width:"5px"}}
              component={"span"}
              />   

              
          </Box>
          <Grid container spacing={2}>
            {Copydata && Copydata?.slice(0,SeeMore).map((card)=>(
  
              <Grid item sm={12} md={4} xs={12} key={card.id} >   
                <CustomCard card={card}/>
            </Grid>))}
          </Grid>
          {(SeeMore > 3)?
          <Button onClick={()=>{setSeeMore(3)}}>see less</Button>
          :
          <Button onClick={()=>{setSeeMore(100)}}>see more</Button>
        }
        </Box>
      </Box>
      
    </Box>
    </ThemeContext.Provider>
  );
}

export async function getServerSideProps() {
  try {
    const initialData = await fetch('/api/data').then((res) => res.json());
    return {
      props: { initialData },
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return {
      props: { initialData: [] },
    };
  }
}
