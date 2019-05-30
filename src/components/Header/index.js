import React, { useState } from 'react'
import Link from 'react-router-dom'
import { VideoPlayer } from '../Videos'

const style = {
  h1: {
    color: '#00f'
  },
  container: {
    textAlign: 'center',
    padding: '2rem 3rem'
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem 0'
  }
}

function Header () {
  const [data, handleData] = useState({})

  const fetchData = async () => {
    try {
      const data = await fetch(
        'http://localhost:3001/api/stream',

        { credentials: 'same-origin' }
      )
      handleData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const { container, h1, listContainer } = style
  return (
    <div style={container}>
      <h1 style={h1}>Welcome to the Youtube App</h1>
      <div style={listContainer}>
        <div>
          <h4>Home</h4>
        </div>
        <div>
          <button>Videos</button>
          <VideoPlayer />
        </div>
        <div>
          <h4>Audio</h4>
        </div>
        <div>
          <h4>Random</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
