import Navb from '../NavB';
import Inicio from '../DiseñoArq/Inicio';
import Parte2 from '../DiseñoArq/Parte2';
import Parte3 from '../DiseñoArq/Parte3';
import Parte4 from '../DiseñoArq/Parte4';
import Parte5 from '../DiseñoArq/Parte5';
import Info from '../Info';

export default function index(): JSX.Element {
  return (
    <div>
      <Navb />
      <div>
        <Inicio />
      </div>
      <div>
        <Parte2 />
      </div>
      <div>
        <Parte3 />
      </div>
      <div>
        <Parte4 />
      </div>
      <div>
        <Parte5 src="./assets/casacortada.png" />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
