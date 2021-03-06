import React, { Component } from "react";
import { Heading, Text } from "spectacle";
import { style } from "../../styles/custom-styles";


import { createSteppedEasing } from "../../utils";

import Bullet from "../../pixel-elements/bullets";
import anime from "animejs";

export const runRendererProcessAnimation = () => {
  const timeline = anime.timeline();
  timeline.add({
    targets: "#main-process-list",
    opacity: [1, 0],
    easing: createSteppedEasing(4),
    duration: 500
  }).add({
    targets: "#main-process-desc",
    height: [400, 0],
    easing: createSteppedEasing(8),
    duration: 500,
    offset: "+=300"
  }).add({
    targets: "#main-process",
    translateX: [-250, 0],
    translateY: [150, 0],
    scale: [1.5, 1],
    duration: 500,
    easing: createSteppedEasing(10),
    offset: "+=300"
  }).add({
    targets: ["#renderer-process", "#renderer-process-text", "#arrow-section"],
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 250,
    offset: "+=300"
  }).add({
    targets: ["#main-process", "#renderer-icon-0", "#renderer-icon-2", "#arrow-section"],
    opacity: [1, 0],
    easing: createSteppedEasing(4),
    duration: 250,
    offset: "+=500"
  }).add({
    targets: ["#renderer-process"],
    borderColor: "#10162A",
    duration: 500,
    easing: createSteppedEasing(10),
    offset: "-=500"
  }).add({
    targets: ["#renderer-icon-1", "#renderer-process-text"],
    translateX: [0, -250],
    translateY: [0, -150],
    scale: [1, 1.5],
    duration: 500,
    easing: createSteppedEasing(10),
    offset: "+=300"
  }).add({
    targets: "#renderer-process-desc",
    height: [0, 400],
    easing: createSteppedEasing(8),
    duration: 500,
    offset: "+=300"
  }).add({
    targets: "#renderer-process-list",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500,
    offset: "+=500"
  });
};

const setRendererIcons = () => {
  const icons = [];
  for (let i = 0; i < 3; i++) {
    icons.push(
      <div key={i} id={`renderer-icon-${i}`}style={style.rendererItem}>
        <Bullet type="file" size={80} color="#9EE9F8" />
        <Text textFont="secondary" textColor="tertiary" size={10}>
          {"<html>"}
        </Text>
      </div>);
  }
  return icons;
};

export class Architecture3 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Arquitectura</Heading>
        <div style={style.content}>
          <div style={style.mainProcess} id="main-process">
            <Bullet type="window" size={80} color="#9EE9F8" />
            <Text style={{ margin: 0 }} textFont="secondary" textColor="tertiary">
              <small>{"{main.js}"}</small>
            </Text>
            <Text textFont="secondary" textColor="tertiary">
              Main Process
            </Text>
          </div>
          <div style={style.arrowDown} id="arrow-section">
            <Bullet type="arrow" size={40} color="#9EE9F8" />
          </div>
          <div style={style.defaultContainer} id="renderer-process">
            {setRendererIcons()}
          </div>
          <div id="renderer-process-text">
            <Text textFont="secondary" textColor="tertiary">
              Renderer Process
            </Text>
          </div>
        </div>
        <div id="main-process-desc" style={style.rightContainer}>
          <div id="main-process-list">
            <div style={ style.bulletListItem }>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
               Maneja las páginas web de nuestra app.
              </Text>
            </div>
            <div style={ style.bulletListItem }>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
                Acceso a APIs nativas.
              </Text>
            </div>
            <div style={ style.bulletListItem }>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
                <span>Sólo un proceso <i>main</i> por aplicación</span>
              </Text>
            </div>
          </div>
        </div>
        <div id="renderer-process-desc" style={style.rightContainer}>
          <div id="renderer-process-list">
            <div style={ style.bulletListItem }>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              Muestra el contenido de una página web.
              </Text>
            </div>
            <div style={ style.bulletListItem }>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
                Acceso a APIs del DOM y del navegador.
              </Text>
            </div>
            <div style={ style.bulletListItem }>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
                <span>Puede haber más de un proceso <i>renderer</i> por aplicación.</span>
              </Text>
            </div>
            <div style={ style.bulletListItem }>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              Son independientes.
              </Text>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
