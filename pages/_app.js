import '../styles/global.css';
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
    return <Component className={montserrat.className} {...pageProps} />;
}