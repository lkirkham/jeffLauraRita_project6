import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      colour: "",
      price: ""
    };
  }
  clicking = () => {
    this.props.displayWines();
    this.scrollTo();
  };

  scrollTo = () => {
    scroll.scrollTo(1030);
  };
  render() {
    return (
      <section className="formContainer clearfix">
        <div className="form clearfix">
          <div className="formWrapper">
            <form onSubmit={this.props.displayWines}>
              <div className="filters clearfix">
                <fieldset className="priceSelect">
                  <h3>Set your budget:</h3>
                  <ul>
                    <li>
                      <label className="radio inline" htmlFor="$">
                        <input
                          onClick={this.props.handleChangePrice}
                          name="price"
                          id="$"
                          type="radio"
                          value={this.state.price}
                        />
                        <span>&nbsp;$</span>
                      </label>
                    </li>
                    <li>
                      <label className="radio inline" htmlFor="$$">
                        <input
                          onClick={this.props.handleChangePrice}
                          name="price"
                          id="$$"
                          type="radio"
                          value={this.state.price}
                        />
                        <span>&nbsp;$$</span>
                      </label>
                    </li>
                    <li>
                      <label className="radio inline" htmlFor="$$$">
                        <input
                          onClick={this.props.handleChangePrice}
                          name="price"
                          id="$$$"
                          type="radio"
                          value={this.state.price}
                        />
                        <span>&nbsp;$$$</span>
                      </label>
                    </li>
                    <li>
                      <label className="radio inline" htmlFor="$$$$">
                        <input
                          onClick={this.props.handleChangePrice}
                          name="price"
                          id="$$$$"
                          type="radio"
                          value={this.state.price}
                        />
                        <span>&nbsp;$$$$</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>

                <fieldset className="colourSelect">
                  <h3>Pick your plonk:</h3>
                  <ul>
                    <li>
                      <label className="radio inline" htmlFor="red">
                        <input
                          onChange={this.props.handleChangeColour}
                          name="colour"
                          id="red"
                          type="radio"
                          value={this.state.colour}
                        />
                        <span>&nbsp;Red</span>
                      </label>
                    </li>
                    <li>
                      <label className="radio inline" htmlFor="white">
                        <input
                          onChange={this.props.handleChangeColour}
                          name="colour"
                          id="white"
                          type="radio"
                          value={this.state.colour}
                        />
                        <span>&nbsp;White</span>
                      </label>
                    </li>
                    <li>
                      <label className="radio inline" htmlFor="all">
                        <input
                          onChange={this.props.handleChangeColour}
                          name="colour"
                          id="all"
                          type="radio"
                          value={this.state.colour}
                        />
                        <span>&nbsp;All</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </form>
            <button className="btn filterBtn" onClick={this.clicking}>
              Bottoms Up
            </button>
          </div>
        </div>
        <div className="formQuote">
          <div className="formQuoteScreen">
            <h2 className="quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.{" "}
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
