import React from 'react'
import './Home.css'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';



export default function CustomizedInputBase() {
    return (
        <div className='search'> 
            <p class='title' >Stay ahed with Real-Time Insights</p>
      <Paper
        component="form"
        sx={{ p: '2px 400px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '1rem' }} aria-label="menu">
          
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Start typing in any topic/company name"
          inputProps={{ 'aria-label': 'Start typing in any topic/company name' }}
        />
        <IconButton type="button" sx={{ p: '10px 16rem' }} aria-label="search">
          <SearchIcon />
        </IconButton>
    
       
      </Paper>
      </div>
    );
  }