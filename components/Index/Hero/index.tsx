import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Image from 'next/image'
import img from '../../../public/assets/exp.png'
export default function index() {
  return (
    <>
    <Container className='my-5'>
        <Row className='my-5' ><h1 style={{fontFamily:'Montserrat', fontWeight:'bold'}}>Unique Living Querétaro</h1><h2 style={{fontFamily:'Montserrat'}}>Arquitectos con mas de 10 años de experiencia</h2></Row>
        <Row className='my-5'><p style={{fontFamily:'Raleway'}}>Creemos fielmente que un buen diseño arquitectonico puede hacernos reír,soñar e incluso hacernos bailar.</p>
        <p style={{fontFamily:'Raleway'}}>Buscamos ofrecer espacios donde la creatividad y la innovación se mezcle con la funcionalidad y la estética, satisfacer las necesidades de nuestros clientes divirtiéndonos un poco en el proceso.</p>
        <p style={{fontFamily:'Raleway'}}>Te aseguramos que mientras diseñamos y construimos tu casa de ensueño, disfrutaremos junto a ti cada paso dado en el desarrollo de tu nuevo espacio favorito.</p>
        </Row>
        <Row>
            <Image src={img} width={0} height={0} alt='' style={{width:'40%',height:'40%'}}/>
        </Row>
    </Container>
    
    </>
  )
}
