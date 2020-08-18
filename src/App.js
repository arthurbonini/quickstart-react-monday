import React from "react";
import "./App.css";

import kiwiApi from "./apis/kiwi";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      apitest: {},
    };
  }

  componentDidMount() {
    kiwiApi.get("/userinfo").then((res) => this.setState({ apitest: res }));
  }

  render() {
    return <div className="App">Hello! monday Apps!</div>;
  }
}

export default App;
