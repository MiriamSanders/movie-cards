import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import FiltersBar from './components/FiltersBar'
import MoviesList from './components/MoviesList'
import './App.css'

function App() {
  

  return (
    <>
     <Header></Header>
     <FiltersBar></FiltersBar>
     <MoviesList></MoviesList>
    </>
  )
}

export default App
