import React, { Component } from 'react'
import Small1 from './Small1'
import Small2 from './Small2'
import Small3 from './Small3'

export default class Box1 extends Component {
  render() {
    return (
      <div className="box">
        <Small1></Small1>
        <Small2></Small2>
        <Small3></Small3>
      </div>
    )
  }
}
