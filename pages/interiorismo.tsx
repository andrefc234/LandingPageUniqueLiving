import React from 'react'
import Index from '@/components/Interiorismo'
import Layout from '@/components/Layout'
import Head from 'next/head'
export default function interiorismo() {
  return (
    <>
     <Head>
        <title>Interiorismo</title>
        <meta name="description" content="Unique Living Querétaro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout><Index/></Layout>
    </>
  )
}
