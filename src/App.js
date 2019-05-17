import React from 'react'
import searchYoutube from 'youtube-api-v3-search'

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
              <div>{i.id.videoId}</div>
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
