import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";
import { yellow, red, blue, green, purple } from '@material-ui/core/colors';
import './SwipeButtons.css'

export function SwipeButtons() {
    

    return (
        <>
        <div className="swipeButtons">
        <IconButton>
          <ReplayIcon fontSize="large" style={{ color: yellow[500] }} className="swipeButtons__icon" />
        </IconButton>
        <IconButton>
          <CloseIcon fontSize="large" style={{ color: red[500] }} className="swipeButtons__icon" />
        </IconButton>
        <IconButton>
          <StarIcon fontSize="large" style={{ color: blue[500] }} className="swipeButtons__icon" />
        </IconButton>
        <IconButton>
          <FavoriteIcon fontSize="large" style={{ color: green[500] }} className="swipeButtons__icon" />
        </IconButton>
        <IconButton>
          <FlashOnIcon fontSize="large" style={{ color: purple[500] }} className="swipeButtons__icon" />
        </IconButton>
        </div>
        </>
    )
}

export default SwipeButtons