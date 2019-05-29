import React from 'react'

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
  const { container, h1, listContainer } = style
  return (
    <div style={container}>
      <h1 style={h1}>Welcome to the Youtube App</h1>
      <div style={listContainer}>
        <div>
          <h4>Home</h4>
        </div>
        <div>
          <h4>Videos</h4>
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
