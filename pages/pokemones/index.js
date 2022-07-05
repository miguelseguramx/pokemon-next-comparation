import Link from 'next/link'
import Head from '../../components/head'
import Footer from '../../components/footer'

const fetcher = (url) => fetch(url).then((res) => res.json())

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export default function Pokemon({ data }) {
  return (
    <div className="container">
      <Head title="Lista de paginas estaticas" />

      <main className="main">
        <div>
          <h1>getStaticProps y getStaticPaths</h1>
          <p className="description">
            Hemos creado la siguiente lista de paginas estaticas utilizando las rutas dinamicas de Next.js
            y las funciones de <b>getStaticProps y getStaticPaths</b>, donde getStaticProps se encarga de generar
            las rutas y getStaticProps se encarga de generar los datos para cada una de las mismas.
          </p>
          <p className="description">
            Al usar Incremental Static Regeneration, puedes navegar por tu cuenta a la pagina de cualquiera de las paginas
            de los casi 1000 pokemones que estan disponibles, solo cambiando el numero de la ruta, teniendo asi más de 1000
            paginas estaticas solo con un pequeño fragmento de codigo y los poderes de Next.js.
          </p>
          <a href="https://leonidasesteban.com/blog/next-js?utm_source=code-example&utm_medium=pokemon-list&utm_campaign=pokemon-next" target="_blank" rel="noopener noreferrer">
            <b>
              Ver mas
            </b>
          </a>
        </div>
        <div>
          <ul className="pokemones">
            {data.map(({ name, url }) => (
              <li key={name}>
                <Link href={url} passHref>
                  <a>
                    Pagina de {capitalize(name)}:
                    <b>
                      {`  /${url}`}
                    </b>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Traemos toda la informacion necesaria para renderizar una pagina web.
  const { results } = await fetcher('https://pokeapi.co/api/v2/pokemon/')
  const data = results.map(({ name, url }) => ({ name, url: url.replace('https://pokeapi.co/api/v2/pokemon', 'pokemones') }))

  return {
    props: {
      data,
    },
  }
}
