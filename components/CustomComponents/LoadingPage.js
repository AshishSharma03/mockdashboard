import { CircularProgress,Box } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../data/ThemeContext'

function LoadingPage() {
    // const {dark} = useContext(ThemeContext)
  return (
    <Box sx={{minHeight:"100vh",display:'flex',alignItems:'center',justifyContent:"center"}}>
        <CircularProgress thickness={9}/>
    </Box>
  )
}

export default LoadingPage