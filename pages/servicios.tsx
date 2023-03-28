import Head from 'next/head';

import { Inter } from 'next/font/google';

import Servicios from '../components/Servicios';
const inter = Inter({ subsets: ['latin'] });

export default function Services() {
  return (
    <>
      <Head>
        <title>Servicios</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Servicios />
    </>
  );
}