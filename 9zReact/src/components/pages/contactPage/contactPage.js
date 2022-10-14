import React from 'react';
import TopNav from './../../TopNav/TopNav'
import Footer from './../../Footer/Footer'
import { Container, Row, Col, Button } from "react-bootstrap";
import { contactConfig } from "./contentoption";
import './contact.css'
import bgVideo from './../../videos/9zvid.mp4';

const MainPage = () => (
  <div className=''>
    <TopNav />

    <video className='bgImage' autoPlay loop muted>
      <source src={bgVideo} type="video/mp4" />
    </video>
    <Container className='containerContact'>
      <Row className="mb-5 mt-3 w-100 text-center">
        <Col>
          <h1 className="display-4 mb-4">Contactanos</h1>
          <hr className="t_border my-1 ml-0 w-100" />
        </Col>
      </Row>
      <Row className="sec_sp w-100 text-center">
        <Col lg="5" className="mb-5 w-100">
          <h3 className="color_sec py-4">Pongase en contacto</h3>
          <address>
            <strong>Email:</strong>{" "}
            <span className='mailAddres' >
              {contactConfig.YOUR_EMAIL}
            </span>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Telefono:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <div className='containerForm mb-5'>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Mensaje"
                rows="5"
                required
              ></textarea>
              <br />
              {/* <Row>
              <Col lg="12" className="form-group">

              </Col>
            </Row> */}
            </form>
          </Col>
          <Button variant='secondary' className="btn ac_btn" type="submit">
            Enviar
          </Button>
        </div>
      </Row>

    </Container>

    <Footer />

  </div>


);

export default MainPage;
