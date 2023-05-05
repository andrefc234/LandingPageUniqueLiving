import Navb from '../MainComponents/NavB';
import ImageTitle from '../MainComponents/ImageTitle';

import Gallery from '../MainComponents/Gallery';
import MasInfo from '../MainComponents/MasInfo';
import Presentacion from '../MainComponents/Presentacion';
import Info from '../MainComponents/Info';
import Mosaico from '../MainComponents/Mosaico';
import Part2 from './Part2';
export default function index(): JSX.Element {
  const images = [
    './assets/inter1.jpg',
    './assets/inter2.jpg',
    './assets/inter3.jpg',
  ];
  return (
    <div>
      <div>
        <ImageTitle img={'./assets/interior.jpg'} title={<>Interiorismo</>} />
      </div>
      <div>
        <Part2
          subtitle1={'Consideramos:'}
          spansubtitle="Espacios Únicos"
          subtitle2="con"
          title="Transformamos Tus"
          item1={
            <>
              Su <b>funcionalidad</b>
            </>
          }
          item2={
            <>
              Tus <b>necesidades</b>
            </>
          }
          item3={
            <>
              El <b>entorno</b>
            </>
          }
          item4={
            <>
              La <b>iluminación</b>
            </>
          }
        />
      </div>
      <div>
        <Gallery images={images} height={'130%'} marginB="7%" />
      </div>
      <div>
        <Mosaico
          paragraph={'Para una '}
          paragraph2="diseñamos tus espacios "
          styledspan1="experencia unica"
          styledspan2="optimizando recursos"
        />
      </div>
      <div>
        <MasInfo
          img={'./assets/depa.jpg'}
          subtitle1={'Te'}
          spansubtitle="ayudamos"
          subtitle2="con"
          item1={
            <>
              La <b>distribución</b> del tu espacio
            </>
          }
          item2={
            <>
              El diseño de tu <b>mobiliario</b>
            </>
          }
          item3={
            <>
              La propuesta de <b>color y acabados</b>
            </>
          }
          item4={
            <>
              La <b>iluminación</b> decorativa
            </>
          }
          title="¿Buscas un espacio unico y funcional?"
        />
      </div>
      <div>
        <Presentacion
          img={'./assets/casacortada.png'}
          titlespan={'¡Ahorra y construye'}
          title={'con nosotros!'}
        />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
