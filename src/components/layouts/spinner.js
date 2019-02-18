import React, { Component } from 'react'
import spiner from './spinner.gif'
export default class spinner extends Component {
  render() {
    return (
      <div>
        <img src={spiner}
        alt = "loading.."
        style={{width:'200px', width:'40px auto',   display:'block  '}} />
      </div>
    )
  }
}
