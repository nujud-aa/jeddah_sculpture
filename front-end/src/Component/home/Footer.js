import React, { Component } from 'react'
import { Navbar, Container, Col, Row } from 'react-bootstrap';
import vision from "../../img/vision.png"
import '../../App.css'
import { FaFacebook, FaTwitterSquare, FaInstagram, FaYoutube } from "react-icons/fa";



export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="footer1">
                    <Container>
                        <Row>
                            <Col size={3}>
                                <div className="aboutUs">
                                    <ul>
                                        <h2>About us</h2>
                                        <ol> <a>-Brief</a> </ol>
                                        <ol> <a>-FAQ</a> </ol>
                                        <ol> <a>-Help</a> </ol>
                                    </ul>
                                </div>
                            </Col>


                            <Col size={3} >
                                <div className="Contact">
                                    <ul>
                                        <h2>Contact us</h2>
                                        <ol><a>  920004315</a></ol>
                                        <ol><a>info@jsh.sa</a></ol>
                                    </ul>
                                </div>
                            </Col>
                            <Row>
                                <Col size={3}>
                                    <div className="Folow">
                                        <h2>Follow us </h2>
                                        <Row>
                                            <Col >< FaFacebook /></Col>
                                            <Col><FaTwitterSquare /></Col>
                                            <Col > <FaInstagram /></Col>
                                            <Col><FaYoutube /></Col>
                                        </Row>

                                    </div>
                                </Col>
                            </Row>

                            <Col size={3}>

                                <img src={vision} style={{ width: 100 }} />
                                <h5>All right resived to JSH 2019</h5>
                            </Col>
                        </Row>
                    </Container>
                </footer>

            </div>
        )
    }
}
