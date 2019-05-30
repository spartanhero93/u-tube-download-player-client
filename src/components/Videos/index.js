import React, { useEffect, useState } from 'react'

export function VideoPlayer () {
  const [data, handleData] = useState([])

  async function fetchData () {
    const res = await await fetch(
      'http://localhost:3001/api/getVideos'
    )
    const data = await res.json()
    handleData(data)
  }
  console.log(data)
  return (
    <div>
      <h1>Videos will display here</h1>
      <button onClick={fetchData}>
        Online Videos list
      </button>
      {data.length
        ? data.map(i => (
          <div>
            <h3>{i.title}</h3>
            <p>{i._id}</p>
          </div>
        ))
        : 'loading'}
    </div>
  )
}
