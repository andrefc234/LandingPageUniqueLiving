import Navb from '../MainComponents/NavB';
import Proyecto1 from '../Proyectos/Proyecto1';
import ImageTitle from '../MainComponents/ImageTitle';
import Presentacion from '../MainComponents/Presentacion';
import Info from '../MainComponents/Info';

export default function index(): JSX.Element {
  return (
    <div>
      <Navb />
      <div>
        <ImageTitle
          img={'./assets/Proyectosportada.jpg'}
          title={<>Proyectos</>}
        />
      </div>
      <Proyecto1 />
      <div>
        <Presentacion
          img={'./assets/casacortada.png'}
          titlespan={'¡Ahorra y construye'}
          title={'con nosotros!'}
        />
      </div>
      <Info />
    </div>
  );
}
