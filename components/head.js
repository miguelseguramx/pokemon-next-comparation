import Head from 'next/head'
import { useRouter } from 'next/router'

function HeadCustom({ title }) {
  const { pathname } = useRouter()
  return (
    <Head>
        <title>
          Ejemplo:
          {' '}
          {title}
        </title>
        <meta name="description" content="Te mostramos el codigo y la experiencia de usuario cuando estas creando una pagina utilizando React.js y la PokéApi" />
        <meta name="keywords" content="React, Next.js, Single Page Aplication, SPA, Pokemon, PokeApi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default HeadCustom
