import React from 'react';
import { FaPeopleArrows } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { MdBuild } from 'react-icons/md';
import { BsFillHouseCheckFill } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function QuintaParte() {
  const [ref, inView] = useInView({
    threshold: .1, // Trigger when 50% of the component is visible
    triggerOnce: false, // Only trigger once
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <Container fluid className="bg-white">
          <div>
          
      <div style={{backgroundImage:'url("/assets/mosaico1.jpg")'}} className='text-center p-5'>
        
        <h1 className="text-3xl font-bold mb-0">Nuestro Proceso</h1>
      </div>
      </div>
      <div className="text-center">
      <animated.div ref={ref} style={props}>
        <div style={{ display: 'inline-block' }}>
          <div className="mx-4 p-4 border-2 border-solid border-brown-600 rounded-lg">
            
            <div className="d-flex justify-content-center">

              <FaPeopleArrows size={50} color="#4B3832" />
            </div>
            <h3 className="text-center font-bold my-4">Te conocemos</h3>
            <p className="text-center">
              Es importante para nosotros conocerte y tener bien claras tus necesidades. Por eso lo primero que hacemos antes de empezar con el proyecto es sentarnos contigo a platicar. Saber cuales son tus gustos y tus intereses, y ubicar qué no te gusta y te molesta.
            </p>
            
            <p className="text-center">
              Te diseñamos a ti y solamente para ti, por eso es crucial que nos platiques todo lo que soñaste para tu nueva casa.
            </p>
             
          </div>
        
        </div>
     
        <div style={{ display: 'inline-block' }}>
          <div className="mx-4 p-4 border-2 border-solid border-brown-600 rounded-lg">

            <div className="d-flex justify-content-center">
              <MdDesignServices size={50} color="#4B3832" />
            </div>
            <h3 className="text-center font-bold my-4">Te diseñamos</h3>
            <p className="text-center">
              Generamos el concepto dentro del espacio y lo visualizamos por medio de modelados 3D. Te mostramos la propuesta con Renders realistas y recorridos virtuales, y anotamos tu retroalimentación buscando que todo encaje perfectamente con tu único estilo.
            </p>

          </div>
        </div>
        <div style={{ display: 'inline-block' }}>
          <div className="mx-4 p-4 border-2 border-solid border-brown-600 rounded-lg">
            <div className="d-flex justify-content-center">
              <MdBuild size={50} color="#4B3832" />
            </div>
            <h3 className="text-center font-bold my-4">Te construimos</h3>
            <p className="text-center">
              Desarrollamos to el proyecto ejecutivo con todos los planos necesarios para levantar tu nuevo hogar.
            </p>         
            <p className="text-center">
              Cada etapa se revisa minuciosamente para que no se nos pase ningún detalle y todo se vaya ejecutando en tiempo y forma.
            </p>
          </div>
        </div>
        <div style={{ display: 'inline-block' }}>
          <div className="mx-4 p-4 border-2 border-solid border-brown-600 rounded-lg">
          <div className="d-flex justify-content-center">
              <BsFillHouseCheckFill size={50} color="#4B3832" />
            </div>
            <h3 className="text-center font-bold my-4">Te entregamos tu hogar</h3>
            <p className="text-center">
              Finalmente, entregamos tu hogar totalmente terminado, tal y como lo soñaste. Verás que todo quedó perfecto y no podrás esperar para mudarte a tu nuevo hogar.
            </p>
          </div>
        </div>
        </animated.div>
      </div>
    </Container>
  );
}

export default QuintaParte;
