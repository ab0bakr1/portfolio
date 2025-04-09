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




const Portfolio = () => {
  return (
    <section className='Portfolio' id='Portfolio'>
        <Container>
            <h2>My project</h2>
            <Row xl={3} md={2} xs={1}>
                <Col xl={4} md={6} xs={12}>
                    <div className="Portfolio-card">
                        <div className="card-box">
                            <div className="card-front">
                                <CardInfo name={"SmarTouch"} type={"E-Commerce"}/>
                                <div className="card-languages">
                                    <div className="languages-one">
                                        <img src={html} alt="" />
                                        <p>html</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={react} alt="" />
                                        <p>react</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={javascript} alt="" />
                                        <p>javascript</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={smartouch} />
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
                                            <img src={html} alt="" />
                                            <p>html</p>
                                        </div>
                                        <div className="languages-one">
                                            <img src={css} alt="" />
                                            <p>css</p>
                                        </div>
                                        <div className="languages-one">
                                            <img src={react} alt="" />
                                            <p>react</p>
                                        </div>
                                        <div className="languages-one">
                                            <img src={javascript} alt="" />
                                            <p>javascript</p>
                                        </div>
                                        <div className="languages-one">
                                            <img src={bootstrap} alt="" />
                                            <p>bootstrap</p>
                                        </div>
                                    </div>
                                </div>
                            <div className="card-back">
                                <img src={carslk} />
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
                                        <img src={html} alt="" />
                                        <p>html</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={react} alt="" />
                                        <p>react</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={javascript} alt="" />
                                        <p>javascript</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={Jeddah} />
                            </div>
                            <a href='https://jeddah-two.vercel.app/' target='_blank' className='website'></a>
                        </div>
                    </div>
                </Col>
                <Col xl={4} md={6} xs={12} >
                <div className="Portfolio-card">
                        <div className="card-box">
                            <div className="card-front">
                                <CardInfo name={"PhotoSec"} type={"Landing page"}/>
                                <div className="card-languages">
                                    <div className="languages-one">
                                        <img src={html} alt="" />
                                        <p>html</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={react} alt="" />
                                        <p>react</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={javascript} alt="" />
                                        <p>javascript</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={photosec} />
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
                                        <img src={html} alt="" />
                                        <p>html</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={javascript} alt="" />
                                        <p>javascript</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={tenclaouds} />
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
                                        <img src={html} alt="" />
                                        <p>html</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={javascript} alt="" />
                                        <p>javascript</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={Vision} />
                            </div>
                            <a href='https://ab0bakr1.github.io/project-PlacementDost-landing/' target='_blank' className='website'></a>
                        </div>
                    </div>
                </Col>
                <Col xl={4} md={6} xs={12} >
                    <div className="Portfolio-card">
                        <div className="card-box">
                            <div className="card-front">
                                <CardInfo name={"SeriesNa"} type={"TV Shows"}/>
                                <div className="card-languages">
                                    <div className="languages-one">
                                        <img src={html} alt="" />
                                        <p>html</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={react} alt="" />
                                        <p>react</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={javascript} alt="" />
                                        <p>javascript</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={seriesna} />                                
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
                                        <img src={html} alt="" />
                                        <p>html</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={react} alt="" />
                                        <p>react</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={javascript} alt="" />
                                        <p>javascript</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={CloneGemini} />                                
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
                                        <img src={react} alt="" />
                                        <p>react</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={css} alt="" />
                                        <p>css</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={api} alt="" />
                                        <p>api</p>
                                    </div>
                                    <div className="languages-one">
                                        <img src={bootstrap} alt="" />
                                        <p>bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <img src={Weather} />                                
                            </div>
                            <a href='https://task4-4-webmasters.vercel.app/' target='_blank' className='website'></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio