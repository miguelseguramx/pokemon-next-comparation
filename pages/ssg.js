import Image from 'next/image'
import styles from '../styles/index.module.css'
import Head from '../components/head'
import Footer from '../components/footer'
import SideContent from '../components/sidecontent'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Pokemon({ data }) {
  return (
    <div className={styles.container}>
      <Head title="Static Site Generation" />

      <main className={styles.main}>
        <SideContent />
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={data.image} alt="Leonidas Esteban Logo" width={300} height={300} layout="responsive" />
          </div>
          <div>
            <h2>{data.name}</h2>
            <h3>Battle Locations:</h3>
            <ul>
              {data.battles.map(({ location_area: { name } }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Traemos toda la informacion necesaria para renderizar una pagina web.
  const { name, location_area_encounters, sprites } = await fetcher('https://pokeapi.co/api/v2/pokemon/1')
  const pokemonBattles = await fetcher(location_area_encounters)

  return {
    props: {
      data: {
        name,
        image: sprites.front_default,
        battles: pokemonBattles,
      },
    },
  }
}
