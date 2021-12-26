
import React from "react";
import "./Footer.css"

const Footer = () => (
  <>
<div className="wrap" >
    <div className="footerCard">
      <h2>Gym </h2>
      <p>возле аламединского рынка</p>
      <a href="#/">+996 703 21 94 64</a>
      <a href="#/">seresupro94@gmail.com</a>
      <div className="footerSocials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
    <div className="footerCard">
      <h2>Полезные ссылки</h2>
      <a href="#/">Цены</a>
      <a href="#/">О нас</a>
      <a href="#/">Галлерея</a>
      <a href="#/">Контакты</a>
    </div>
    <div className="footerCard">
      <h2>Подпишитесь</h2>
      <div className="inputWrap">
        <input type="email" placeholder="Enter your mail" />
        <button >Отправить</button>
      </div>
      <p>Спортивное питание улучшает ваше тело.</p>
    </div>
  </div>

  <footer className="footer" >
    <div className="container">
      <p className="footer-txt"> 
        Copyright &copy;2021 All rights reserved | made with
         by
        
        Paulo
      </p>
      </div>
  </footer>
  </>
);



export default Footer;
