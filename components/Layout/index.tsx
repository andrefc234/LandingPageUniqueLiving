import React from 'react';
import PrimeraParte from '../Primeraparte';
import SegundaParte from '../Segundaparte';
import Navb from '../NavB';
import Terceraparte from '../TerceraParte';
import CuartaParte from '../CuartaParte';
import QuintaParte from '../QuintaParte/index';
import SextaParte from '../SextaParte';
import Preventa2 from '../Preventa2';
export default function index(): JSX.Element {
  return (
    <div>
      <Navb />
      <PrimeraParte />
      <SegundaParte
        title="Conócenos"
        description={{
          paragraph1:
            'En Unique Living somos un grupo joven de creativos que nos gusta disfrutar de lo que hacemos. Creemos que laarquitectura no tiene por qué ser seria y aburrida. Siempre hemos pensado que un buen diseño arquitectónicopuede hacernos reír, soñar e incluso bailar.',
          paragraph2:
            ' Por supuesto, eso no significa que no tomemos la arquitectura en serio. Buscamos ofrecer espacios donde lacreatividad se mezcle con la funcionalidad y la estética, y satisfacer las necesidades de nuestros clientesdivirtiéndonos un poco en el proceso.',
          paragraph3:
            'Te aseguramos que mientras diseñamos y construimos tu casa de ensueño, disfrutaremos junto a ti cada paso dado en el desarrollo de tu nuevo espacio favorito.',
        }}
        imageSrc="/assets/jARDIN1.jpg"
      />
      <Terceraparte />
      <CuartaParte />
      <QuintaParte />
      <SextaParte
        title="Misión"
        descriptionn={{
          paragraph4:
            ' Unique Living busca que cada proyecto sea tan único como tu. Aseguramos empatizar contigo, entender tus necesidades y seguir tu estilo.',
          paragraph5:
            ' Ningún proyecto se parece a los demás pues buscamos que la esencia de cada cliente quede perfectamente reflejada en el diseño de cada concepto.',
        }}
        imageSrc="./assets/sALA1.jpg"
      />
    </div>
  );
}
