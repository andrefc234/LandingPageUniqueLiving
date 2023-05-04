import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
export default function index() {
  return (
    <>
    <Container >
      <Row >
        <Col>test</Col>
        <Col>test</Col>
        <Col>test</Col>
        <Col>test</Col>
      </Row>
      <Row>
      <Col className='text-center'><h3 style={{fontFamily:'Montserrat'}}>Te conocemos</h3><p  style={{fontFamily:'Raleway'}}> Diseñaremos lo que siempre haz soñado, por eso queremos
conocerte. Tus necesidades, gustos e intereses son importantes.</p></Col>
        <Col className='text-center'><h3 style={{fontFamily:'Montserrat'}}>Te construimos</h3> <p style={{fontFamily:'Raleway'}}>Desarrollamos todo el proyecto ejecutivo con los planos
necesarios para levantar tu nuevo hogar. Cada etapa es revisada
minuciosamente y así todo se ejecute en tiempo y forma.</p></Col>
        <Col className='text-center'><h3 style={{fontFamily:'Montserrat'}}>Te entregamos</h3> <p style={{fontFamily:'Raleway'}}>¡Tu nuevo hogar esta listo! Queremos festejar conttigo con
un evento especial para un día especial. Y por supuesto, te seguiremos
acompañando en el futuro.</p></Col>
        <Col className='text-center'><h3 style={{fontFamily:'Montserrat'}}>Te entregamos</h3>

<p style={{fontFamily:'Raleway'}}>
  ¡Tu nuevo hogar esta listo!
Queremos festejar conttigo con un evento especial para un día especial.
Y por supuesto, te seguiremos acompañando en el futuro.
  </p> </Col>
      </Row>
    </Container>
    </>
  )
}
