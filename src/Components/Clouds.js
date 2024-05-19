import React from 'react'; // Import React
import BIRDS from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three'

class Birds extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = BIRDS({
        el: this.vantaRef.current,
        backgroundAlpha: 0.1,
        THREE: THREE,
        color1:   0xd2fc,
        color2:   0xe1ff00
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
      return <div style= {{height: 650 + 'px'}} ref={this.vantaRef}>
      </div>
    }
  }
export default Birds
