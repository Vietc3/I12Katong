import React from 'react';
import Head from 'next/head';
import { Box, BoxProps } from '@chakra-ui/react';
import Navbar from './navbar';
import Footer from './Footer';
import Transition from "./Transitions"
import { useRouter } from "next/router"
type Props = {
    title?: string;
    children?:any,
    props?:any
} & BoxProps;

const Layout: React.FC<Props> = ({ children, title = 'Modern News', ...props }) =>{
    
    const router = useRouter()
    return(
        <>
    <Box>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;700&family=Playfair+Display&display=swap" rel="stylesheet"/>
        </Head>
            <Box>
                <header>
                    <Navbar />
                </header>
                <Box as="main" marginX="auto" {...props}>
                <Transition location={router.pathname}>{children}</Transition>
                </Box>
                <Footer />
            </Box>
    </Box>
    </>)
   
};

export default Layout;
