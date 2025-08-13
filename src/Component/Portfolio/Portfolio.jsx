import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Portfolio.css'
import Websites from './Websites.json'
import html from "../../IMG/languages1.png"
import css from "../../IMG/languages2.png"
import bootstrap from "../../IMG/languages3.png"
import node from "../../IMG/languages7.png"
import api from "../../IMG/languages8.png"
import javascript from "../../IMG/languages5.png"
import react from "../../IMG/languages6.png"
import CardInfo from './CardInfo'
import photosec from "../../IMG/photosec.png"
import smartouch from "../../IMG/SmarToucH2.png"
import carslk from "../../IMG/carslk.mp4 05_07_45 02_56_13 م.png"
import tenclaouds from "../../IMG/tenclaouds.mp4 05_07_45 02_55_25 م.png"
import seriesna from "../../IMG/seriesna.png"
import CloneGemini from "../../IMG/Clone-Gemini.png"
import Jeddah from "../../IMG/Jeddah.png"
import Vision from "../../IMG/Vision.png"
import Weather from "../../IMG/Weather.png"
import ThenAlqanoon from "../../IMG/لقطة شاشة 2025-06-19 014656.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'


const iconMap = {
  faReact: faReact,
  faCss3: faCss3,
  faJs: faJs,
  faBootstrap: faBootstrap,
  faHtml5: faHtml5
};


const Portfolio = () => {

  const [fillter, setFillter] = React.useState("all")
  const category = ["all", "Directory", "E-Commerce", "AI Chat", "Landing page", "Weather App"]
  const filltered = fillter === "all" ? Websites : Websites.filter((website) => website.type.toLowerCase() === fillter.toLowerCase());


  return (
    <section className='Portfolio' id='Portfolio'>
        <Container>
            <h2>My project</h2>
            <ul className="fillter">
                {category.map((item) => (
                    <li key={item} onClick={() => setFillter(item)} className={fillter === item ? "active" : ""}>{item}</li>
                ))}
            </ul>
            <hr className="my-3" />
            <Row xl={3} md={2} xs={1} className='Portfolio-items'>
                {filltered.reverse().map((website, index) => (
                    <div className="Portfolio-card">
                        <div className="card-box">
                            <div className="card-front">
                                <CardInfo name={website.name} type={website.type}/>
                                <div className="card-languages">
                                    {website.languages.map((iconKey, i) => (
                                        <div className="languages-one" key={i}>
                                            <FontAwesomeIcon icon={iconMap[iconKey]} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={require(`../../IMG/${website.image}`)} loading='lazy' alt={website.name} />
                            </div>
                            <a href={website.link} target='_blank' className='website'></a>
                        </div>
                    </div>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio
