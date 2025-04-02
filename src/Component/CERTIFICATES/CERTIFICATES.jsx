import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CERTIFICATE1 from "../../IMG/CERTIFICATE1.png"
import CERTIFICATE2 from "../../IMG/CERTIFICATE2.png"
import CERTIFICATE3 from "../../IMG/CERTIFICATE3.png"
import "./CERTIFICATES.css";



const CERTIFICATES = () => {
  return (
    <section className='CERTIFICATES'>
        <Container>
            <h2>CERTIFICATES</h2>
            <Row xl={3} md={2} sm={1} style={{ gap: "10px 0" }}>
                <div className="CERTIFICATE">
                  <img src={CERTIFICATE1} alt="" />
                </div>
                <div className="CERTIFICATE">
                  <img src={CERTIFICATE2} alt="" />
                </div>
                <div className="CERTIFICATE">
                  <img src={CERTIFICATE3} alt="" />
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default CERTIFICATES
