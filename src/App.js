import React from 'react'
import searchYoutube from 'youtube-api-v3-search'
import axios from 'axios'

const SERVER_URL = 'http://localhost:3001'

class App extends React.Component {
  state = {
    data: {},
    text: ''
  }

  handelText = ({ target }) =>
    this.setState({ text: target.value })

  search = async () => {
    try {
      const data = await searchYoutube('API_KEY', {
        q: this.state.text
      })
      this.setState({
        data: data.items
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleClickDownload = async vidId => {
    try {
      const res = await axios.post(
        `${SERVER_URL}/api/${vidId}`
      )
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { data } = this.state
    console.log(this.state.data)
    return (
      <div>
        <h1>Welcome to Youtube App</h1>
        <button onClick={() => this.search()}>Fetch</button>
        <input
          onChange={e => this.handelText(e)}
          type='text'
        />
        {data.length ? (
          data.map(i => (
            <div
              style={{ padding: '1rem 0' }}
              id={i.id.videoId}
            >
              <h2>{i.snippet.title}</h2>
              <h5>{i.snippet.description}</h5>
              <button
                onClick={() =>
                  this.handleClickDownload(i.id.videoId)
                }
              >
                {i.id.videoId}
              </button>
              <img
                src={i.snippet.thumbnails.default.url}
                alt={i.snippet.title}
              />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
  }
}

export default App
