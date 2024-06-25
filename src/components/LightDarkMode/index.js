import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: 'Dark'}

  make = () => {
    this.setState(prev => ({mode: prev.mode === 'Light' ? 'Dark' : 'Light'}))
  }

  render() {
    const {mode} = this.state
    let m
    let n
    if (mode === 'Light') {
      m = 'white'
      n = 'Dark'
    } else {
      m = 'black'
      n = 'Light'
    }
    return (
      <div className="container">
        <div className={`sub-container ${m}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.make}>
            {`${n} Mode`}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
