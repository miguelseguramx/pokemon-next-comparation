import Image from 'next/image'
import Head from '../../components/head'
import Footer from '../../components/footer'
import SideContent from '../../components/sidecontent'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Pokemon({ data }) {
  return (
    <div className="container">
      <Head title="Static Site Generation" />

      <main className="main">
        <SideContent />
        <div className="card">
          <div className="cardImage">
            <Image src={data.image} alt="Leonidas Esteban Logo" width={300} height={300} layout="responsive" />
          </div>
          <div>
            <h2>{data.name}</h2>
            <h3>Battle Locations:</h3>
            {data.battles.length > 0 ? (
              <ul>
                {data.battles.map(({ location_area: { name } }) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            ) : <p>Sin batallas</p>}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const { results } = await fetcher('https://pokeapi.co/api/v2/pokemon/')
  const paths = results.map(({ url }) => ({ params: { pokemon_id: url.slice(34, -1) } }))

  //  Hemos creado un array con la siguiente estructura donde listamos
  // todos los posibles valores de nuestros parametros
  // const paths = [
  //   { params: { pokemon_id: 1 } }
  //   { params: { pokemon_id: 2 } }
  //   { params: { pokemon_id: 3 } }
  // ]
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { pokemon_id } }) {
  // Traemos toda la informacion necesaria para renderizar una pagina web.
  const { name, location_area_encounters, sprites } = await fetcher(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
  const pokemonBattles = await fetcher(location_area_encounters)
  console.log('Generando la pagina correspondiente al pokemón: ', pokemon_id)

  return {
    props: {
      data: {
        name,
        image: sprites.front_default,
        battles: pokemonBattles,
      },
      revalidate: 60,
    },
  }
}
