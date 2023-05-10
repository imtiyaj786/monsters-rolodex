import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Mohamad", LastName: "Imtiyaj" },
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.LastName}!
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Aamir", LastName: "Alam" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Click Me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
