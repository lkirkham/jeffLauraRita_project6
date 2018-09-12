import React, { Component } from "react";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import { animateScroll as scroll } from "react-scroll";

class WineList extends Component {
  constructor() {
    super();
    this.state = {
      wine: "",
      visible: 6
    };
  }
  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 6 };
    });
  }
  click = () => {
    this.loadMore();
    this.props.displayWines();
    this.scrollMore();
  };

  scrollMore = () => {
    scroll.scrollMore(450);
  };

  render() {
    return (
      <div className="results">
        <div className="wrapper clearfix">
          {this.props.userChoice.slice(0, this.state.visible).map((item, i) => {
            return (
              <Link to={`/products/${item.id}`}>
                <div
                  key={item.id}
                  className="card wineChoice clearfix animated fadeInUp"
                >
                  <div className="cardWrapper clearfix">
                    {item.onSale ? <p class="sale">Sale</p> : null}
                    <figure className="imageWrapper">
                      <img
                        src={item.imgURL}
                        onerror="this.style.display = &quot;none&quot;"
                        alt={item.name}
                      />
                    </figure>
                    <div className="cardSide">
                      <div className="wineTitle">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="winePriceWrapper">
                        <p className="winePrice">
                          {`${item.price}`}
                          <span>/bottle</span>
                        </p>
                      </div>
                      <button className="btn smallBtn">See Details</button>{" "}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="wrapper">
          {this.state.visible < this.props.userChoice.length && (
            <div>
              <button className="btn" onClick={this.click}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WineList;
