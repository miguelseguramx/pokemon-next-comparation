import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Head from '../components/head'
import Footer from '../components/footer'
import SideContent from '../components/sidecontent'

const fetcher = (url) => fetch(url).then((res) => res.json())

// THIS IS JUST A SIMULATION OF HOW WILL LOOK A SINGLE PAGE APLICATION

export default function Pokemon() {
  const [data, setData] = useState({})

  const getPokemon = async () => {
    const { name, location_area_encounters, sprites } = await fetcher('https://pokeapi.co/api/v2/pokemon/1')
    const pokemonBattles = await fetcher(location_area_encounters)
    setData({
      name,
      image: sprites.front_default,
      battles: pokemonBattles,
    })
  }

  useEffect(() => {
    // We call the API on the Frontend
    setTimeout(() => {
      getPokemon()
    }, 500);
  }, []);

  if (!data.name) return null

  return (
    <div className={styles.container}>
      <Head title="Client Side Rendering" />

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
