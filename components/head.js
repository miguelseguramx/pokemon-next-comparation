import Head from 'next/head'

function HeadCustom(params) {
  return (
    <Head>
        <title>Ejemplo de una SPA</title>
        <meta name="description" content="Te mostramos el codigo y la experiencia de usuario cuando estas creando una pagina utilizando React.js y la PokéApi" />
        <meta name="keywords" content="React, Next.js, Single Page Aplication, SPA, Pokemon, PokeApi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default HeadCustom
