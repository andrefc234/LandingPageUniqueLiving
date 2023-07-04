import Navb from '../MainComponents/NavB';
import Preventa1 from './Preventa1';
import Preventa2 from './Preventa2';
import Preventa3 from './Preventa3';
import Preventa4 from './Preventa4';
import Preventa5 from './Preventa5';
import Presentacion from '../MainComponents/Presentacion';
import ImageTitle from '../MainComponents/ImageTitle';
import Info from '../MainComponents/Info';
import Gallery from '../MainComponents/Gallery';
import Mosaico from '../MainComponents/Mosaico';
import img from '../../public/assets/rg.jpg'
export default function index(): JSX.Element {
  const images = ["./assets/fachada.jpg" , './assets/_28012018_DSC036112.jpg','./assets/fac.png'];
  return (
    <div>
      <Navb />
      <ImageTitle
 backgroundUrl={img}
 title={<>
  Loft
 </>}
 />
      <div>
         <Preventa5/>
      
      </div>
      <div>
        <Gallery  images={images} height='100%' marginB='0%' />
      </div>
      <div>
        <Mosaico paragraph={
       "Para una "
      }
      
      paragraph2="diseñamos tus espacios "
      styledspan1="experencia unica"
      styledspan2="optimizando recursos"/>
      </div>
      <div>
        <Preventa4/>
      </div>
      <div>
      
      </div>
      <div>
      <Presentacion
    img={"./assets/casacortada.png"}
    titlespan={"¡Ahorra y construye"}
    title={"con nosotros!"}
    />
      </div>
      <div><Info/></div>
    </div>
  );
}
