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
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'




const Portfolio = () => {
  return (
    <section className='Portfolio' id='Portfolio'>
        <Container>
            <h2>My project</h2>
            <Row xl={3} md={2} xs={1}>
                {Websites.map((website, index) => (
                    <div className="Portfolio-card">
                        <div className="card-box">
                            <div className="card-front">
                                <CardInfo name={website.name} type={website.type}/>
                                <div className="card-languages">
                                    {website.languages.map((language, langIndex) => (
                                        <div className="languages-one" key={langIndex}>
                                            <FontAwesomeIcon icon={language} />
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
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"SmarTouch"} type={"E-Commerce"}/>
                            <div className="card-languages">
                                <div className="languages-one">
                                    <img src={react} alt="react" loading='lazy' />
                                    <p>react</p>
                                </div>
                                <div className="languages-one">
                                    <img src={css} alt="css" loading='lazy' />
                                    <p>css</p>
                                </div>
                                <div className="languages-one">
                                    <img src={javascript} alt="javascript" loading='lazy' />
                                    <p>javascript</p>
                                </div>
                                <div className="languages-one">
                                    <img src={bootstrap} alt="bootstrap" loading='lazy' />
                                    <p>bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <img src={smartouch} loading='lazy' alt="Website SmarTouch" />
                        </div>
                        <a href='https://ab0bakr1.github.io/SmarToucH/' target='_blank' className='website'></a>
                    </div>
                </div>
                
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio
