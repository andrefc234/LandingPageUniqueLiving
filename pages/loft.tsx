import Head from 'next/head';
import Preventa from '../components/Preventa';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Services() {
  return (
    <>
      <Head>
        <title>Loft</title>
        <meta name="description" content="Unique Living Querétaro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Preventa />
    </>
  );
}
