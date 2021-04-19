// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/index.css';
import { Fonts } from '../fonts';
import { Chakra } from '../Chakra';
import Layout from '../components/Layout';

function Application({ Component, pageProps }: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts/>
            <Layout title="Home | Modern News" px={{ base: '.6em', md: '1.2em' }} py="1.4em">
                <Component {...pageProps} />
            </Layout>
        </Chakra>
    );
}

export { getServerSideProps } from '../Chakra';

export default Application;
