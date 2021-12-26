import React from "react";
import ReactDOM from "react-dom";
// import addMap from "../components/addMap";

import { Link } from "react-router-dom";

import {  Button } from "antd";
// serviceWorker.unregister();
const Error404 = () => {
  return (
    <div className="container" style={{marginTop:"90px"}}>
    <div className="map-container">
      <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d730.7899560627766!2d74.6308002!3d42.8905746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb79c78ac4ecb%3A0xf53b37088e7762fb!2z0KbQpNC40JEgIlN0cm9uZyI!5e0!3m2!1sru!2skg!4v1640485374400!5m2!1sru!2skg" style={{width:"100vw"}} ></iframe>
      
      </div>
          <Link to="/">
            <Button type="primary" style={{marginLeft:"50px"}}>Back Home</Button>
          </Link>
       
    </div>
  );
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


export default Error404;
