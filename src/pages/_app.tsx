import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Cookies from "../components/public/Cookies";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Cookies/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
