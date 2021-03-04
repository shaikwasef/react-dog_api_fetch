import React from "react";
import "./style.css";
import DogImage from "./DogImage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogImageUrl: [] };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breed/hound/images/random/3")
      .then(response => response.json())
      .then((object) =>
        this.setState({ dogImageUrl: object.message })
      ).catch(error => console.log(error));
  }

  render() {
    const dogList = this.state.dogImageUrl.map((url,i) => {
      return <DogImage key = {i} value={url} />;
    });
    return (
      <div>
        <div> Images </div>
        {dogList}
      </div>
    );
  }
}

export default App;
