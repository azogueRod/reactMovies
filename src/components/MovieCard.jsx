import React, { useState } from 'react'
import { Button, Card, CardContent, CardMedia, Collapse, Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import { fetchTrailerKey } from '../api'

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false)
  const [videoKey, setVideoKey] = useState(null)

  const addFavorite = () => alert('agregaste a favoritos')

  const handleOpen = async () => {
    const key = await fetchTrailerKey(movie.id)
    if (key) {
      setVideoKey(key)
      setOpen(true)
    } else {
      console.error('No se encontró un trailer para ésta película')
    }
  }

  const handleClose = async () => {
    setOpen(null)
    setVideoKey(null)
  }

  return (
    <>
      <Card sx={{ 
        width: '13rem',
        margin: 2,
        borderRadius: 8,
        border:'1px solid gray',

        }}>
        <CardMedia
          component="img"
          height="160px"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          
          alt={movie.title}
        />
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent
          sx={{
            height:'85px',
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))", // Fondo degradado
          }}
        >
          <Typography variant="body1">{movie.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.release_date} - {movie.genre} - {movie.duration}
          </Typography>

          <Button
            variant='contained'
            onClick={handleOpen}
            
            sx={{ 
              backgroundColor:'#6100C2'
            }}

          >
            WATCH VIDEO
          </Button>
          <IconButton onClick={addFavorite}>
            {/* <FavoriteBorderIcon /> */}
          </IconButton>
        </CardContent>
        {/* </Collapse> */}
        {console.log('MOVIE', movie.title)}
        <Dialog open={open} onClose={handleClose} maxWidth='lg' fullWidth>
          <DialogContent>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            {videoKey ? (
              <iframe
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${videoKey}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <Typography variant="h6">No trailer available</Typography>
            )}
          </DialogContent>
        </Dialog>
      </Card>
    </>
  )
}

export default MovieCard