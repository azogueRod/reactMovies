import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import MovieCard from '../components/MovieCard'
import { useLocation } from 'react-router-dom'
import { getSeries } from '../api'

const Series = () => {
  const [movies, setMovies] = useState()
  const location=useLocation()
  
  useEffect(() => {
    const fetchMovies = async () => {
      const series = await getSeries()
      setMovies(series)
      
    }
    fetchMovies()
  }, [])

  return (
    <Box sx={{
      backgroundColor:'#21201E',
      minHeight: "100vh", 
      padding: '10px 50px 50px',
    }}>
      <Typography
       variant='h6'
       sx={{
         paddingInlineStart:'1.5rem',
         color:'white'
        }}
       >Series</Typography>
      {console.log('PATH ',location.pathname)}
     
      {movies ? (
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            padding: "10px",
             }}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </Box>
      ) :
        <p>Cargando...</p>}
    </Box>
  )
}


export default Series