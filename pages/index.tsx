import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '../components/Layout';
import Terceraparte from '../components/Index/TerceraParte';
import CuartaParte from '../components/Index/CuartaParte';
import Hero from '../components/Index/Hero';
import QuintaParte from '../components/Index/QuintaParte/index';
import SextaParte from '../components/Index/SextaParte';
import PrimeraParte from '../components/Index/Primeraparte';
import SegundaParte from '../components/Index/Segundaparte';
import Info from '../components/MainComponents/Info';
import Mosaico from '../components/MainComponents/Mosaico';
import Presentacion from '../components/MainComponents/Presentacion';
import MosaicoTitle from '../components/MainComponents/MosaicoTitle';
import Projects from '../components/Index/Projects'
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Unique Living Queretaro</title>
        <meta name="description" content="Arquitectura y diseño de interiores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PrimeraParte />
        
       
        <Hero />
        <MosaicoTitle title="Proyectos" />
        <Projects/>
        <MosaicoTitle title="Nuestros Procesos" />
        <SegundaParte />

        <Terceraparte />
       
      
        <Presentacion
          img={'./assets/casacortada.png'}
          titlespan={' '}
          title={' '}
        />
        <Info />
      </Layout>
    </>
  );
}
