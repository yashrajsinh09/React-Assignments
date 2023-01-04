import { render } from '@testing-library/react'
import React from 'react'
import './Assignment1.css'

class Assignment1 extends React.Component {
  constructor() {
    super();
this.state = {
  input: "",
  showParagraph: false
}
  }
  render() {
    return (
      <div className='container'>
        <input type="text" value={this.state.input}
        onChange ={(e) => this.setState({input: e.target.value})}
        />
        <br />
        <button 
        onClick={() => {
          this.setState({
            showParagraph: !this.state.showParagraph
          })
        }}
        >
          Convert to UpperCase</button>
        <br />
        {this.state.showParagraph && <p>{this.state.input.toUpperCase()}</p>}
      </div>
    )
  }
}

export default Assignment1


