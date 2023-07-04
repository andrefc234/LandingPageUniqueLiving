import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import { FaPeopleArrows } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { MdBuild } from 'react-icons/md';
import { BsFillHouseCheckFill } from 'react-icons/bs';
export default function index() {
  return (
    <>
    <Container className='my-5'>
      <Row >
      
      </Row>
      <Row>
      <Col className='text-center border rounded p-2 mx-1'>
      <FaPeopleArrows size={50} color="#4B3832" />
      <br/>
      <br/>
        <h3 style={{fontFamily:'Montserrat'}}>Te conocemos</h3>  <br/> <p  style={{fontFamily:'Raleway'}}> Diseñaremos lo que siempre haz soñado, por eso queremos
conocerte. <br/> <br/>Tus necesidades, gustos e intereses son importantes.</p></Col>
        <Col className='text-center border rounded p-2 mx-1'>
        <MdDesignServices size={50} color="#4B3832" />
        <br/>
        <br/>
          <h3 style={{fontFamily:'Montserrat'}}>Te diseñamos</h3> <br/><p style={{fontFamily:'Raleway'}}>Generamos el concepto dentro del espacio y lo visualizamos por medio de modelados 3D.  <br/> <br/>Te mostramos la propuesta con Renders realistas y recorridos virtuales, y anotamos tu retroalimentación buscando que todo encaje perfectamente con tu único estilo.
</p></Col>
        <Col className='text-center border rounded p-2 mx-1'>
        <MdBuild size={50} color="#4B3832" />
        <br/>
        <br/>
          <h3 style={{fontFamily:'Montserrat'}}>Te construimos</h3> <br/> <p style={{fontFamily:'Raleway'}}>Desarrollamos to el proyecto ejecutivo con todos los planos necesarios para levantar tu nuevo hogar.<br/> <br/>
        Cada etapa se revisa minuciosamente para que no se nos pase ningún detalle y todo se vaya ejecutando en tiempo y forma.</p></Col>
        <Col className='text-center border rounded p-2 mx-1'>
        <BsFillHouseCheckFill size={50} color="#4B3832" />
        <br/>
        <br/>
          <h3 style={{fontFamily:'Montserrat'}}>Te entregamos</h3>
          <br/>

<p style={{fontFamily:'Raleway'}}>
  ¡Tu nuevo hogar esta listo!
  <br/>
Queremos festejar conttigo con un evento especial para un día especial.
<br/>
<br/>
Y por supuesto, te seguiremos acompañando en el futuro.
  </p> </Col>
      </Row>
    </Container>
    </>
  )
}
