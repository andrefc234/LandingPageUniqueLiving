import Navb from '../NavB';
import Inicio from '../DiseñoArq/Inicio';
import Parte2 from '../DiseñoArq/Parte2';
import Parte3 from '../DiseñoArq/Parte3';

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
    </div>
  );
}
