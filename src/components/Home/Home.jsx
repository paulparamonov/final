import React from "react";
import "./Home.css";
import { Card , Carousel } from "antd";
import mainBgOne from "../Images/mainBgOne.png";
// import { Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';


const { Meta } = Card;
const Home = () => {
  const contentStyle = {
    height: 'auto',
    
    lineHeight: '160px',
    textAlign: 'center',
    
    
  };
  return (
    <div className="home-body">
     <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img
      src={mainBgOne}
       /> 
       </h3>
       
    </div>
    
    
  </Carousel>
    <div className="container">
    <div  className="mainInfo">
    <h3>Создай свое</h3>
    <h1>Идеальное <br/> тело</h1>
    
    
  </div>
      

      
      <div className="link">
        <a
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          RECOMENDED FOR YOU
        </a>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
            className='recom_img'
              alt="example"
              src="https://svetofor.info/images/thumbnails/500/500/detailed/191/mineralno-vitaminnyj-kompleks-biotechusa-one-a-day-93-1.jpg"
            />
          }
        >
          <Meta title="BioTechUSA One-a-Day" description="One a Day – это витаминно-минеральный комплекс от Biotech USA, который создавался специально для людей, ведущих активный образ жизни. " />
        </Card>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img 
            className='recom_img'

              alt="example"
              src="https://svetofor.info/images/thumbnails/500/500/detailed/191/predtrenirovochnyj-kompleks-nuclear-nutrition-400-g-igniter-93-1.jpg"
            />
          }
        >
          <Meta  title="Nuclear Nutrition 400 г IGNITER" description="это важные для организма минералы, представленные  в популярном соотношении 2:1.

Кальций и магний в организме уравновешивают друг друга - при уменьшении количества магния исчезает кальций и наоборот." />
        </Card>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
            className='recom_img'

              alt="example"
              src="https://svetofor.info/images/thumbnails/500/500/detailed/191/kompleks-vitaminov-scitec-nutrition-calcium-magnesium-93-1.jpg"
            />
          }
        >
          <Meta title="Scitec Nutrition Calcium Magnesium" description="это важные для организма минералы, представленные  в популярном соотношении 2:1." />
        </Card>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
            className='recom_img'
            
              alt="example"
              src="https://svetofor.info/images/thumbnails/500/500/detailed/191/vitaminy-biotechusa-coral-calcium-magnesium-93-1.jpg"
            />
          }
        >
          <Meta title="BioTechUSA Coral Calcium-Magnesium" description="одни из самых ценнейших минералов для организма человека. Кальций важен не только для развития и поддержания крепости костей и зубов, но также и для работы мышц и проводимости нервных импульсов." />
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Home;