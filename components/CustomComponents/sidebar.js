import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { List, ListItem, ListItemButton, ListItemText,Typography , Button, useTheme, Box, AppBar, Toolbar, Stack, Divider } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ThemeContext } from '../../data/ThemeContext';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,  
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
 
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),   
 
  position: 'static',
  width: theme.spacing(2) + 1,
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9) + 1,
  },
});

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open,  dark}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    zIndex: 1,
    height: "100vh",
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    [theme.breakpoints.down('md')]: {
      display: 'none',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
    },
  }),
);

const Sidebar = ({open,butn,sections}) => {
const {onChangeCardItems,sectionNo ,dark} = useContext(ThemeContext)
const theme = useTheme()
 
  return (
    

    <StyledDrawer variant="permanent" open={open} dark={dark}  >  
        <Stack sx={{padding:"20px",background:dark?"":"#17082A"}} direction={"row"}  alignItems={"center"} >
        <Typography sx={{color:"#8D3FF1",fontSize:"20px",fontWeight:"900"}}>Logo</Typography>
        {(open)?
        <>
        <Box 

variant="span"
sx={{flex:1}}
/>
       { butn}
        </>
        :"  "
    }
   
    </Stack>
    <Divider  color={dark?"":"#502289"}/>
        {(!open)?
        <>
            <Box sx={{textAlign:'center',background:dark?"":"#17082A"}}>
            {butn}
            </Box>
            <Divider  color={dark?"":"#502289"}/>
        </>
            :"  "
          }

        <Box
        variant="div"
        sx={{padding:"30px 10px 10px 10px",textAlign:"center",background:dark?"":"#17082A"}}
        
        >
         <WidgetsIcon sx={{color:"#CACACA"}}/>
         <Typography sx={{fontSize:"15px",color:"#CACACA"}}>Sections</Typography>
        </Box>

      <List style={{background:dark?"":"#17082A",height:"100%"}} >
        {sections?.map((sec)=>(
          <React.Fragment key={(sec.id)}>
        <ListItem key={(sec.id)} sx={{padding:"0px 0px"}}>
          <ListItemButton onClick={()=>{onChangeCardItems(sec.sec_no)}}  sx={{padding:"10px",display:'flex',justifyContent:"center",color:(sectionNo === sec.sec_no)?"#fff": (dark)?"#000" :"#fff",background:(sectionNo === sec.sec_no)?"#8D3FF1":"" ,'&:hover':{color:"#8D3FF1",background:"#DEC4FF"}}}>
            {open?
            <Typography sx={{fontSize:"15px",fontWeight:"500",padding:"15px 0px",textTransform:"uppercase"}} >{sec.title}</Typography>
            :
            <Typography sx={{fontSize:"20px",fontWeight:"900" }}>
                {sec.sec_no}
            </Typography>
            }
          </ListItemButton> 
        </ListItem>
        
        <Divider />
        </React.Fragment>
      
      ))}
     
      <ListItem sx={{padding:"0px 0px"}}>
      <ListItemButton  sx={{padding:"15px 0px",display:'flex',gap:"10px",justifyContent:"center",color:'#C7C7C7','&:hover':{color:"#8D3FF1",background:"#DEC4FF",}}}>
        <SettingsOutlinedIcon sx={{fontSize:"30px",}} /> 
          {(open)?<Typography sx={{textTransform:"uppercase"}}>Setting</Typography>:""}
      </ListItemButton>
      </ListItem>
      
      </List>
     
    </StyledDrawer>
      
  );
};

export default Sidebar;
