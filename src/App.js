import React, { useState } from 'react'
import searchYoutube from 'youtube-api-v3-search'
import { RenderItems } from './components/RenderItems'
import { KEY } from './key'
// const SERVER_URL = 'http://localhost:3001'

function App () {
  const [data, handleData] = useState({})
  const [text, handleText] = useState('')

  const requestData = async term => {
    try {
      const data = await searchYoutube(KEY, {
        q: term
      })
      handleData(data)
    } catch (error) {
      console.error(error)
    }
  }
  console.log(data)
  return (
    <div>
      <h1>Text: {text}</h1>
      <input
        type='text'
        onChange={e => handleText(e.target.value)}
      />
      <button onClick={() => requestData(text)}>
        Search!
      </button>
      <RenderItems items={data.items} />
    </div>
  )
}

export default App
