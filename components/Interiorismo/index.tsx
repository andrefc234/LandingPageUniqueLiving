import Navb from '../NavB';
import ImageTitle from '../ImageTitle'

import Gallery from '../Gallery'
import MasInfo from '../MasInfo'
import Presentacion from '../Presentacion'
import Info from '../Info';
import Part2 from './Part2'
export default function index(): JSX.Element {
  const images = ['./assets/inter1.jpg', './assets/inter2.jpg','./assets/inter3.jpg'];
  return (
    <div>
      
      <div>
      <ImageTitle
 img={"./assets/interiorismo.jpg"}
 title={<>
  Interiorismo
 </>}
 />
      </div>
      <div>
      <Part2
      subtitle1={'Consideramos:'}
      spansubtitle='Espacios Únicos'
      subtitle2='con'
      title='Transformamos Tus'
      item1={<>
      Su <b>funcionalidad</b> 
      </>}
      item2={<>
      Tus <b>necesidades</b> 
      </>}
      item3={<>
      El  <b>entorno</b>
      </>}
       item4={<>
      La <b>iluminación</b> 
      </>}
     />
      </div>
      <div>
      <Gallery images={images} paragraph={
       "Para una "
      }
      
      paragraph2="diseñamos tus espacios "
      styledspan1="experencia unica"
      styledspan2="optimizando recursos"
      />
      </div>
      <div>
      <MasInfo
    img={"./assets/depa.jpg"}
    subtitle1={'Te'}
    spansubtitle='ayudamos'
    subtitle2='con'
    item1={<>
    La <b>distribución</b> del tu espacio
    </>}
    item2={<>
    El diseño de tu <b>mobiliario</b> 
    </>}
    item3={<>
    La propuesta de  <b>color y acabados</b>
    </>}
     item4={<>
    La <b>iluminación</b> decorativa
    </>}
    title='¿Buscas un espacio unico y funcional?'
    
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
