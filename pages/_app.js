import '../styles/globals.css'
import PageHead from '../components/PageHead'


function MyApp({ Component, pageProps }) {
  return (<>
  
  <PageHead/>
  <Component {...pageProps} />
  
  </>)
}

export default MyApp
