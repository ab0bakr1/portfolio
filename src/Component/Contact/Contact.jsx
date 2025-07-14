import React from 'react'
import "./Contact.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <Container>
            <h2>Contact me</h2>
            <Row xl={2} md={2} xs={1}>
                <Col xl={5} md={5} xs={12}>
                    <div className="contact-info" data-aos="fade-right" data-aos-duration="2000">
                        <p><strong>Name : </strong>Abobakr Zain Almashhor</p>
                        <p><strong>Email : </strong>abobakralmashhor@gmail.com</p>
                        <p><strong>Phone : </strong>+967 730605256 <br/> +966543770498 <br/> +96876628669</p>
                        <div className="contact-socail" data-aos="fade-up" data-aos-duration="2000">
                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href=""><FontAwesomeIcon icon={faSquareFacebook} /></a>
                            <a href=""><FontAwesomeIcon icon={faSquareGithub} /></a>
                        </div>
                    </div>
                </Col>
                <Col xl={7} md={7} xs={12}>
                    <div className="contact-item" data-aos="fade-down" data-aos-duration="2000">
                        <a href='https://wa.me/+96876628669' target='_blank' className="contact-now">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <h5>Whatsapp</h5>
                            <h6>+96876628669</h6>
                            <p>write me</p>
                        </a>
                        <a href='mailto:abobakralmshhor@gmail.com' target='_blank' className="contact-now">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h5>Mail</h5>
                            <h6>abobakralmshhor@gmail.com</h6>
                            <p>write me</p>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact
