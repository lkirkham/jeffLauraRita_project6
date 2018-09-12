import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav'

class SavedList extends Component {
  constructor() {
    super();
      this.state = {
        user: null
      }
    }
  render() {
    return (
      <section className="savedList">
        <Nav appstate={this.props.appstate} />
        <div className="wrapper clearfix">
          <h2 className="myCellar">My Cellar</h2>
          {this.props.wineInfo.length == 0 ? (
            <p>
              <em>You don't have any wine in your cellar.</em>
            </p>
          ) : (
            this.props.wineInfo.map(wine => {
              return (
                <div className="card wineList clearfix" key={wine.wineKey}>
                  <div className="cardWrapper clearfix">
                    <figure className="imageWrapper">
                      <img src={wine.wineImage} />
                    </figure>
                    <div className="cardSide">
                      <div className="wineTitle">
                        <h3>{wine.wineName}</h3>
                      </div>
                      <div className="savedListBtns">
                        <Link to={`/products/${wine.wineId}`} target="_blank">
                          <button className="cellarBtn">See Details</button>
                        </Link>
                        <button
                          className="deleteBtn"
                          onClick={() => this.props.deleteWine(wine.wineKey)}
                          id={wine.wineKey}
                        >
                          Delete Wine
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  }
}

export default SavedList;
