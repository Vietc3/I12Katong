// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/index.css';
import { Fonts } from '../fonts';

import { Chakra } from '../Chakra';
import Layout from '../components/Layout';

import Router from 'next/router';
import React, { useState,useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/core';

import AOS from 'aos';
import 'aos/dist/aos.css'

import {
    Modal, ModalOverlay,
} from '@chakra-ui/react';

const override = css`
position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px;
`;

function Application({ Component, pageProps }: AppProps) {


    let [loading, setLoading] = useState(false);
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));

    useEffect(() => {
        AOS.init({duration:2000}) 
    }, []);

    // const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout title="Home | Modern News" px={{ base: '.6em', md: '1.2em' }} py="1.4em">
                <Modal isOpen={loading}>
                    <ModalOverlay textAlign="center">
                        <BounceLoader css={override} size={70} color='#A8A248' loading />
                    </ModalOverlay>
                </Modal>
                <Component {...pageProps} />
            </Layout>
        </Chakra>
    );
}

export { getServerSideProps } from '../Chakra';

export default Application;
