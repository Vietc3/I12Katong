import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Logo = (props: any) => {
    return (
        <Box {...props}>
            <Image src="/logo/i12Logo.PNG" fontWeight="bold"/>                
        </Box>
    );
};

export default Logo;
