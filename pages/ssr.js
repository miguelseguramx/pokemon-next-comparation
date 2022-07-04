import Image from 'next/image'
import styles from '../styles/index.module.css'
import Head from '../components/head'
import Footer from '../components/footer'
import SideContent from '../components/sidecontent'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Pokemon({ data, ip }) {
  return (
    <div className={styles.container}>
      <Head title="Server Side Render" />

      <main className={styles.main}>
        <SideContent ip={ip} />
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

export async function getServerSideProps({ req, res, query }) {
  // Vamos a retrasar la respuesta del servidor 1 segundo para dramatizar los tiempos ya
  // que la aplicacion es muy pequeña.
  console.log("Start")
  console.time("Promise")
  await new Promise(done => setTimeout(() => done(), 1000))
  console.log("End")
  console.timeEnd("Promise")

  // Traemos la data que vamos a necesitar, podemos utilizar los objetos req o query
  // para modificar el contenido segun la ruta o segun el usuario,
  const { name, location_area_encounters, sprites } = await fetcher('https://pokeapi.co/api/v2/pokemon/1')
  const pokemonBattles = await fetcher(location_area_encounters)

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  return {
    props: {
      data: {
        name,
        image: sprites.front_default,
        battles: pokemonBattles,
      },
      ip,
    },
  }
}
