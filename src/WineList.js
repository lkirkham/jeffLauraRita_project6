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
  // Load More Wines
  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 6 };
    });
  }
  // OnClick Function
  click = () => {
    this.loadMore();
    this.props.displayWines();
    this.scrollMore();
  };
  // Scroll
  scrollMore = () => {
    scroll.scrollMore(450);
  };

  render() {
    return <div className="results">
        <div className="wrapper clearfix">
          {this.props.userChoice
            .slice(0, this.state.visible)
            .map((item, i) => {
              return <div key={item.id}>
                  <Link to={`/products/${item.id}`}>
                    <div className="card wineChoice clearfix animated fadeInUp">
                      <div className="cardWrapper clearfix">
                        {item.onSale ? <div className="sale">
                            <p>Sale</p>
                          </div> : null}
                        <figure className="imageWrapper">
                          <img src={item.imgURL} alt={item.name} />
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
                            <p className="wineStyle">{`${item.style}`}</p>
                          </div>
                          {/* <button className="btn smallBtn">See Details</button>{" "} */}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>;
            })}
        </div>
        <div className="wrapper">
          {this.state.visible < this.props.userChoice.length && <div>
              <button className="btn btnLightBg" onClick={this.click}>
                Load More
              </button>
            </div>}
        </div>
      </div>;
  }
}

export default WineList;
