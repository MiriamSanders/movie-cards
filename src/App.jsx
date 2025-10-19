import { useState } from 'react'
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
