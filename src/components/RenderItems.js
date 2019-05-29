import React from 'react'
import axios from 'axios'
const SERVER_URL = 'http://localhost:3001'

const handleClickDownload = async vidId => {
  try {
    const res = await axios.post(
      `${SERVER_URL}/api/${vidId}`
    )
    console.log(res)
  } catch (error) {
    console.error(error)
  }
}

export const RenderItems = ({ items }) => {
  if (items) {
    return (
      <div>
        {items.map(i => (
          <div key={i.id.videoId}>
            <h2>{i.snippet.title}</h2>
            <p>{i.snippet.description}</p>
            <img
              src={i.snippet.thumbnails.default.url}
              alt={i.snippet.title}
            />
            <small
              onClick={() =>
                handleClickDownload(i.id.videoId)
              }
            >
              {i.id.videoId}
            </small>
          </div>
        ))}
      </div>
    )
  } else {
    return <div />
  }
}
