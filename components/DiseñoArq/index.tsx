import Navb from '../NavB';
import ImageTitle from '../ImageTitle'
import Parte2 from '../DiseñoArq/Parte2';
import Gallery from '../Gallery'
import MasInfo from '../MasInfo'
import Presentacion from '../Presentacion'
import Info from '../Info';

export default function index(): JSX.Element {
  const images = ['./assets/dibujo.png', './assets/nodibujo.png'];
  return (
    <div>
      <Navb />
      <div>
      <ImageTitle
 img={"./assets/inicio.png"}
 title={<>
  Diseño <br />
        Arquitectonico
 </>}
 />
      </div>
      <div>
        <Parte2 />
      </div>
      <div>
      <Gallery images={images} paragraph={
       " ¡Construyendo con estructura metálica te aseguramos mayor"
      }
      
      paragraph2="y "
      styledspan1="seguridad estructural"
      styledspan2="reducción de costos!"
      />
      </div>
      <div>
      <MasInfo
    img={"./assets/construccion1.png"}
    subtitle1={'Nuestros'}
    spansubtitle='servicios'
    subtitle2='incluyen'
    item1={<>
     <b>Desarrollo</b> del concepto
    </>}
    item2={<>
      <b>Gestión</b> del proyecto
    </>}
    item3={<>
      <b>Construcción</b> de tu nueva casa
    </>}
     item4={<>
       <b>Seguimiento</b> post-entrega
    </>}
    title='¡Te ayudamos a construir tu casa soñada!'
    
    />
      </div>
      <div>
      <Presentacion
    img={"./assets/casacortada.png"}
    titlespan={"¡Ahorra y construye"}
    title={"con nosotros!"}
    />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
