import ReactPlayer from 'react-player'
import {Component} from 'react'
import './index.css'

class VideoPlayer extends Component {
  state = {isPlaying: false}

  onPlayPause = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url="https://youtu.be/ryCb96Wp7PM?si=PJrLN2kZiVX6akE4"
            width="650px"
            height="450px"
            playing={isPlaying}
          />
          <button type="button" onClick={this.onPlayPause} className="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default VideoPlayer
