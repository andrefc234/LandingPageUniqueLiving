import Navb from '../NavB';
import Preventa1 from '../Preventa1';
import Preventa2 from '../Preventa2';
import Preventa3 from '../Preventa3';
import Preventa4 from '../Preventa4';
import Preventa5 from '../Preventa5';
import Preventa6 from '../Preventa6';
import Info from '../Info';

export default function index(): JSX.Element {
  return (
    <div>
      <Navb />
      <Preventa1 />
      <div>
        <Preventa2 />
      </div>
      <div>
        <Preventa3 />
      </div>
      <div>
        <Preventa4 />
      </div>
      <div>
        <Preventa5 />
      </div>
      <div>
        <Preventa6 />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
