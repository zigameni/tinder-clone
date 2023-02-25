import React from 'react'


import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

import "./SwipeButtons.css"

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat' sx={{ boxShadow: 15,}}>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__left' sx={{ boxShadow: 15,}}>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__star' sx={{ boxShadow: 15,}} >
            <StarRateIcon fontSize='large' />
        
        </IconButton>
        <IconButton className='swipeButtons__right' sx={{ boxShadow: 15,}}>
            <FavoriteIcon fontSize='large' />
        
        </IconButton>
        <IconButton className='swipeButtons__lightning' sx={{ boxShadow: 15,}}>
            <FlashOnIcon fontSize='large' />
        
        </IconButton>
    </div>
  )
}

export default SwipeButtons