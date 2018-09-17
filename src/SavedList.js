import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          {this.props.wineInfo.length === 0 ? (
            <p>
              <em>You don't have any wine in your cellar.<br/> Add wine by using "Add to Cellar" on any wine details page.</em>
            </p>
          ) : (
            this.props.wineInfo.map(wine => {
              return (
                <div className="card wineList clearfix" key={wine.wineKey}>
                  <Link to={`/products/${wine.wineId}`}>
                  <div className="cardWrapper clearfix">
                      {wine.wineOnSale ? (
                        <div className="sale">
                          <p>Sale</p>
                        </div>
                      ) : null}
                    <figure className="imageWrapper">
                      <img src={wine.wineImage} alt={wine.wineName}/>
                    </figure>
                    <div className="cardSide">
                      <div className="wineTitle">
                        <h3>{wine.wineName}</h3>
                      </div>
                      <div className="winePriceWrapper">
                        <p className="winePrice">
                          {`${wine.winePrice}`}
                          <span>/bottle</span>
                        </p>
                        <p className="wineStyle">{`${wine.wineStyle}`}</p>
                      </div>
                  
                    </div>
                  </div>
                  </Link>
                  <button
                    className="deleteBtn"
                    aria-label="delete"
                    onClick={() => this.props.deleteWine(wine.wineKey)}
                    id={wine.wineKey}
                  >
                    <i className="fas fa-times"></i>
                        </button>
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
