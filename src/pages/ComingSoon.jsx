import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import MovieCard from '../components/MovieCard'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCommingSoon } from '../api'
import { useAuth } from '../components/AuthContext'

const Comming = ({ text }) => {
  const [movies, setMovies] = useState()
  const location = useLocation()
  const { user } = useAuth()
  const navigate = useNavigate()
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate('/')
    } else {

      const fetchMovies = async () => {
        const commingSoon = await getCommingSoon()
        setMovies(commingSoon)
      }
      fetchMovies()
    }
  }, [])

  return (
    <Box sx={{
      backgroundColor: '#21201E',
      minHeight: "100vh",
      padding: '10px 50px 50px',
    }}>
      <Typography
        variant='h6'
        sx={{
          paddingBlockStart: text === 'home' ? '2rem' : '0rem',
          paddingInlineStart: '1.5rem',
          color: 'white'
        }}
      >{text === 'home' ? 'Trending' : 'Comming Soon'}</Typography>
      {console.log('PATH ', location.pathname)}

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


export default Comming