import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Portfolio.css'
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




const Portfolio = () => {
  return (
    <section className='Portfolio' id='Portfolio'>
        <Container>
            <h2>My project</h2>
            <Row xl={3} md={2} xs={1}>
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
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"Carslk"} type={"E-Commerce"}/>
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
                            <img src={carslk} loading='lazy' alt="Website Carslk" />
                        </div>
                        <a href='https://ab0bakr1.github.io/Carslk/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"Jeddah"} type={"Landing page"}/>
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
                            <img src={Jeddah} loading='lazy' alt="Website Jeddah" />
                        </div>
                        <a href='https://jeddah-two.vercel.app/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"PhotoSec"} type={"Landing page"}/>
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
                            <img src={photosec} loading='lazy' alt="Website PhotoSec" />
                        </div>
                        <a href='https://photo-sec.vercel.app/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"Ten Clouds"} type={"Directory"}/>
                            <div className="card-languages">
                                <div className="languages-one">
                                    <img src={html} alt="html" loading='lazy' />
                                    <p>html</p>
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
                            <img src={tenclaouds} loading='lazy' alt="Website Ten Clouds" />
                        </div>
                        <a href='https://ab0bakr1.github.io/project-TenCloud/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"Vision Pro"} type={"Landing page"}/>
                            <div className="card-languages">
                                <div className="languages-one">
                                    <img src={html} alt="html" loading='lazy' />
                                    <p>html</p>
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
                            <img src={Vision} loading='lazy' alt="Website Vision Pro" />
                        </div>
                        <a href='https://ab0bakr1.github.io/project-PlacementDost-landing/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"SeriesNa"} type={"TV Shows"}/>
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
                            <img src={seriesna} loading='lazy' alt="Website SeriesNa" />                                
                        </div>
                        <a href='https://ab0bakr1.github.io/SeriesNa/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"Clone-Gemini"} type={"AI Chat"}/>
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
                            <img src={CloneGemini} loading='lazy' alt="Website CloneGemini" />                                
                        </div>
                        <a href='https://project-clone-gemini.vercel.app/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"Weather"} type={"Weather App"}/>
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
                                    <img src={api} alt="api" loading='lazy' />
                                    <p>api</p>
                                </div>
                                <div className="languages-one">
                                    <img src={bootstrap} alt="bootstrap" loading='lazy' />
                                    <p>bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <img src={Weather} loading='lazy' alt="Website Weather" />                                
                        </div>
                        <a href='https://task4-4-webmasters.vercel.app/' target='_blank' className='website'></a>
                    </div>
                </div>
                <div className="Portfolio-card">
                    <div className="card-box">
                        <div className="card-front">
                            <CardInfo name={"then alqanoon"} type={"Landing page"}/>
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
                            <img src={ThenAlqanoon} loading='lazy' alt="Website ThenAlqanoon" />
                        </div>
                        <a href='https://thahn-alqanon.vercel.app/' target='_blank' className='website'></a>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio
