import Navb from '../NavB';
import Preventa1 from '../Preventa1';
import Preventa2 from '../Preventa2';
import Preventa3 from '../Preventa3';
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
    </div>
  );
}
