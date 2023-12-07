import React from 'react'
import './Home.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
//import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import facebook from '../Assets/facebook.png'
import instagram  from '../Assets/instagram.png'
import tiktok  from '../Assets/tiktok.png'
import youtube  from '../Assets/youtube.png'
import twitter from '../Assets/twitter.png'
import news  from '../Assets/news.png'
import reddit  from '../Assets/reddit.png'
import Avatars from './Avatar';



export default function CustomizedInputBase() {
    return (
        <div className='search'>   
            <p class='title' >Stay ahed with Real-Time Insights</p> <Avatars/>
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
      <div className='social-logo'>
      <img src={twitter} alt='instagram'></img>
      <img src={instagram} alt='instagram'></img>
      <img src={tiktok} alt='instagram'></img>
      <img src={youtube} alt='instagram'></img>
        <img src={facebook} alt='facebook'></img>
        <img src={news} alt='instagram'></img>
        <img src={reddit} alt='instagram'></img>
      </div>

      <div>

      </div>
      </div>
      
    );
  }