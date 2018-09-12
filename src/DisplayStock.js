import React, { Component } from "react";

class DisplayStock extends Component {
  render() {
    return (
      <div>
        {this.props.arrayOfStock.map(store => {
          return (
            <div className="storeInfo" key={store.storeId}>
              <h3>{store.storeName} LCBO</h3>
              <p>
                <span>In Stock: </span> {store.stockAmount} bottles available
              </p>
              <p>
                <span>Address: </span>
                <a href={`https://www.google.ca/maps/place/${store.storeAddress}`} target="_blank">
                  {store.storeAddress}
                </a>
              </p>
              <p>
                <span>Phone Number: </span>
                <a href={`tel:${store.storeAddress}`}>
                  {store.storePhoneNumber}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayStock;
