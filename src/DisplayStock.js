import React, { Component } from "react";

class DisplayStock extends Component {
  render() {
    return (
      <div className="displayStock">
      <div className="wrapper">
        {this.props.arrayOfStock.map(store => {
          return (
            <div className="stockCard" key={store.storeId}>
            <div className="storeInfo">
              <h3>{store.storeName} <br />LCBO</h3>
              <p>
                {store.stockAmount} bottles available
              </p>
              <p>
                  <span><i class="fas fa-map-marker-alt"></i> </span>
                <a href={`https://www.google.ca/maps/place/${store.storeAddress}`} target="_blank">
                  {store.storeAddress}
                </a>
                  <br />
                <span><i class="fas fa-phone"></i> </span>
                <a href={`tel:${store.storePhoneNumber}`}>
                  {store.storePhoneNumber}
                </a>
              </p>
            </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default DisplayStock;
