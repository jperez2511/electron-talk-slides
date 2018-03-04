import React, { Component } from "react";
import { Heading, Text, CodePane } from "spectacle";

import { style } from "../../styles";

import { makeBulletList, createSteppedEasing } from "../../utils";

import Bullet from "../../pixel-elements/bullets";
import anime from "animejs";

const slideStyle = {
  subtitle: {
    marginTop: 30
  }
};

export class GettingStarted1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Creando una Aplicación Electron</Heading>
        <Text style={slideStyle.subtitle} textSize={40} textColor="additional">Cómo empezar</Text>
        <div style={style.content}>
          <CodePane
            lang="jsx"
            source={require("raw-loader!./xx-code-1.example")}
            margin="20px auto"
            overflow="overflow"
            style={ style.codeContainer }
          />
        </div>
      </div>
    );
  }
}