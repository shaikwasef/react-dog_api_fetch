import React from "react";
import "./style.css";

class DogImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.value} />;
  }
}

export default DogImage;
