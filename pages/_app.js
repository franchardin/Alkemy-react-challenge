// bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// my css 
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}