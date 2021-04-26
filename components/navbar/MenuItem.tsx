import React from 'react';
import Link from 'next/link';
import { BoxProps, Button, Text } from '@chakra-ui/react';

interface Props extends BoxProps {
    to: string;
    children?:any
}

const MenuItem: React.FC<Props> = ({ children, to}) => {
    return (
        <Link  href={to}>
        <Button borderRadius={0} _hover={{background:"#fffff"}} _focus={{borderBottom:"1.5px solid #A68340", borderTop:"0px", borderLeft:"0px", borderRight:"0px"}}  variant={'ghost'}  >
          
                <a >
                    <Text fontWeight="bold"  display="block">{children}</Text>
                </a>
          
        </Button>
        </Link>
    );
};

export default MenuItem;
