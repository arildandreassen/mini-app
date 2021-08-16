import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../css/Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      foodToPurchase: 0,
      smallDogs: 0,
      mediumDogs: 0,
      largeDogs: 0,
      leftOverFood: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    fetch("/calculator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        smallDogs: this.state.smallDogs,
        mediumDogs: this.state.mediumDogs,
        largeDogs: this.state.largeDogs,
        leftOverFood: this.state.leftOverFood,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          this.setState({ errorMessage: response.error });
        } else {
          this.setState({ foodToPurchase: response.result, errorMessage: "" });
        }
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="foodCalculator" onSubmit={this.handleSubmit}>
          <div>
            <div>
              <div className="label">Small Dogs:</div>
              <div>
                <input
                  id="smallDogs"
                  name="smallDogs"
                  type="text"
                  className="entry"
                  autocomplete="off"
                  data-lpignore="true"
                  value={this.state.smallDogs}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div>
              <div className="label">Medium Dogs:</div>
              <div>
                <input
                  id="mediumDogs"
                  name="mediumDogs"
                  type="text"
                  className="entry"
                  autocomplete="off"
                  data-lpignore="true"
                  value={this.state.mediumDogs}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div>
              <div className="label">Large Dogs:</div>
              <div>
                <input
                  id="largeDogs"
                  name="largeDogs"
                  type="text"
                  className="entry"
                  autocomplete="off"
                  data-lpignore="true"
                  value={this.state.largeDogs}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div className="leftover">
              <div className="label">Left Over Food:</div>
              <div>
                <input
                  id="leftOverFood"
                  name="leftOverFood"
                  type="text"
                  className="entry"
                  autocomplete="off"
                  data-lpignore="true"
                  value={this.state.leftOverFood}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <Button className="calculateButton" variant="primary" type="submit">
              Calculate
            </Button>
          </div>
        </form>
        <div className="result">
          <p>Food to purchase</p>
          <p id="result">
            {this.state.errorMessage
              ? this.state.errorMessage
              : this.state.foodToPurchase + " lb"}
          </p>
        </div>
      </div>
    );
  }
}

export default Calculator;
