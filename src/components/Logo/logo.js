import React, { Component } from 'react';
import {LogoTitle} from "./logoElements"

class Logo extends Component {
  render() {
    return (
      <div className="logo-main">
        <LogoTitle> Dees Delish Desserts </LogoTitle>
      </div>
    )
  }
}

export default Logo;