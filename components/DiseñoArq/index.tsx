import Navb from '../MainComponents/NavB';
import ImageTitle from '../MainComponents/ImageTitle'
import Parte2 from '../DiseñoArq/Parte2';
import Gallery from '../MainComponents/Gallery'
import MasInfo from '../MainComponents/MasInfo'
import Presentacion from '../MainComponents/Presentacion'
import Info from '../MainComponents/Info';
import Mosaico from '../MainComponents/Mosaico';
import img from '../../public/assets/DISEÑOARQUITECTONICO.png'
export default function index(): JSX.Element {
  const images = ['./assets/dibujo.png', './assets/nodibujo.png'];
  return (
    <div>
      <Navb />
      <div>
      <ImageTitle
 backgroundUrl={img}
 title={<>
  Diseño <br />
        Arquitectónico
 </>}
 />
      </div>
      <div>
        <Parte2 />
      </div>
      <div>
      <Gallery images={images}
      height='100%'
      marginB='0%'
      />
      </div>
      <div>
        <Mosaico
         paragraph={
          " ¡Construyendo con estructura metálica te aseguramos mayor"
         }
         
         paragraph2="y "
         styledspan1="seguridad estructural"
         styledspan2="reducción de costos!"/>
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
