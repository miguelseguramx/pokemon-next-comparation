import NProgress from 'nprogress'
import Router from 'next/router'
import '../styles/globals.css'

Router.onRouteChangeStart = () => {
  NProgress.start()
  setOrigin()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
