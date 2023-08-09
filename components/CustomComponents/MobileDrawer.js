import { Box, Drawer, IconButton, List, ListItem, ListItemButton } from '@mui/material'
import React, { useContext } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ThemeContext } from '../../data/ThemeContext';

function MobileDrawer({sections}) {

    const {onChangeCardItems,sectionNo ,dark ,mobileDrawer,setMobileDrawer} =useContext(ThemeContext)

  return (
    <Drawer open={mobileDrawer}>
        <Box sx={{background:dark?"#fff":"#17082A",height:"100%"}}>

        <Box sx={{padding:"20px",display:"flex"}}>
            <span
            style={{flex:1}}
            />
        <IconButton onClick={()=> {setMobileDrawer(false)}} >
            <CloseOutlinedIcon sx={{color:dark?"":"#fff"}}/>
        </IconButton>
        </Box>
        <List>
             
        {sections?.map((sec)=>(
            <React.Fragment key={(sec.title)}>
            
            <ListItem sx={{margin:"0px",padding:"0px 0px",width:"200px"}} >
                <ListItemButton 
               onClick={()=>{onChangeCardItems(sec.sec_no); setMobileDrawer(false)}}    
               sx={{padding:"20px 40px",textAlign:"center",color:(sectionNo === sec.sec_no)?"#fff": (dark)?"#000" :"#fff",background:(sectionNo === sec.sec_no)?"#8D3FF1":"" ,'&:hover':{color:"#8D3FF1",background:"#DEC4FF"}}} 
               >{sec.title}</ListItemButton>
            </ListItem>
            </React.Fragment>

))}
            </List>
        
            </Box>
    </Drawer>
  )
}

export default MobileDrawer