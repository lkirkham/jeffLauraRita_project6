import React,  { Component } from 'react'

class Footer extends Component {

render(){
  return <footer className="footerSection">
      <div className="socialIcons">
        <i className="fab fa-facebook-square" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter-square" />
      </div>
      <div className="createdBy">
        <p>
          Created by <a href="http://www.jeffleecodes.ca" target="_blank">
            Jeff Lee
          </a>, <a href="http://www.lkirkham.com" target="_blank">
            Laura Kirkham
          </a> & <a href="http://www.ritasolo.com" target="_blank">
            Rita Solo
          </a>
        </p>
      </div>
    </footer>;
}

}

export default Footer