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
      const data = await searchYoutube(
        'API_KEY',
        this.state.text
      )
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <div>
        <h1>Welcome to Youtube App</h1>
      </div>
    )
  }
}

export default App
