import '../styles/global.css'
import '../styles/common.css'
import 'highlight.js/styles/night-owl.css'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    Router.events.on('routeChangeComplete', url => gtag.pageview(url))
  }, [Router.events])

	return <Component {...pageProps} />
}

export default MyApp
