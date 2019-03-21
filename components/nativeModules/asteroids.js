import React from "react";
import { NativeModules, View } from "react-vr";

const AsteroidsModule = NativeModules.Asteroids;

export default class Asteroids extends React.Component {
  componentDidMount() {
    this.instance = AsteroidsModule.populate();
  }

  render() {
    return null;
  }
}
