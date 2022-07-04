import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/index.module.css'

function SideContent({ ip }) {
  const { pathname } = useRouter()
  return (
    <div className={styles.sidecontent}>
      <h1>¿Por que utilizar Next.js?</h1>
      <p>
        Para demostrar las ventajas y como utilizar las distintas caracteristicas de un sitio
        utilizando Static Site Generation de la mano de Next.js, estaremos creando esta pequeña pagina
        con las distintas funciones de Next.js como:
      </p>
      {pathname === '/' ? <p><i>Simulo una pagina que usa Client Side Rendering.</i></p> : null}
      <p></p>
      {ip ? (
        <p>
          Tu dirección IP es
          <b>
            {' '}
            {ip}
            {' '}
          </b>
          , estamos personalizando esto gracias a que estamos usando el Server Side Rendering
        </p>
      ) : null}
      <ul>
        <li>
          <Link href="/">
            Client Side Rendering
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            Server Side Render (SSR) y getServerSideProps
          </Link>
        </li>
        <li>
          <Link href="/ssg">
            Static Site Generation (SSG)
          </Link>
        </li>
        <li>
          <Link href="/pokemones">
            Static Site Generation (SSG) con rutas dinamicas
          </Link>
        </li>
        {/* <li>
          Incremental Static Regeneration (ISR)
        </li> */}
      </ul>
      <div>
        <a
          href="https://leonidasesteban.com/blog/por-que-next-js?utm_source=code-example&utm_medium=spa-link&utm_campaign=pokemon-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer post
        </a>
        <a href="https://github.com/miguelseguramx/pokemon-next-comparation" target="_blank" rel="noreferrer">
          Ver repo
        </a>
      </div>
    </div>
  )
}

export default SideContent
