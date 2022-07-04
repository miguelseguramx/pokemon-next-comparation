import Image from 'next/image'
import styles from '../styles/index.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://leonidasesteban.com/blog/por-que-next-js?utm_source=code-example&utm_medium=spa-banner&utm_campaign=pokemon-next"
        target="_blank"
        rel="noreferrer"
      >
        Creada con ❤️ para Leonidasesteban.com
        <Image src="https://leonidasesteban.com/icons/icon-50x50.png" alt="Leonidas Esteban Logo" width={25} height={25} />
      </a>
    </footer>
  )
}

export default Footer
