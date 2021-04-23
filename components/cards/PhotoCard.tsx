import React, { useState } from 'react';
import { Box, BoxProps, Heading } from '@chakra-ui/react';
import styles from '../../constants/styles';
import Image from '../Image';
import { useRouter } from 'next/router';

interface Props extends BoxProps {
    boxSize?: number | string;
    imgSrc: string;
    alt: string;
    title: string;
    imgBorderRadius?: number;
    idDeal?:string
   
}

const PhotoCard: React.FC<Props> = ({
    alt,
    title,
    imgSrc,
    idDeal,
    boxSize = '100%',
    imgBorderRadius = styles.borderRadius,
    ...rest
}) => {
    const [hover, setHover] = useState(false);

    const router = useRouter();
    const onClickStore = () => {
        router.push(`/deals/${idDeal}`);
        window.scrollTo(0, 0);
    };

    return (
        <Box
            cursor="pointer"
            position="relative"
            flexDirection="column"
            flex={1}
            style={{ transform: `scale(${hover ? 1.02 : 1})` }}
            transition="ease-in 0.2s"
            display="flex"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...rest}
            onClick={()=>onClickStore()}
        >
            <Image
                objectFit="cover"
                borderRadius={imgBorderRadius}
                boxSize={boxSize}
                src={imgSrc}
                alt={alt}
                maxHeight={rest.maxHeight}
            />
            <Heading
                fontSize="1.1rem"
                transition="ease-in 0.15s"
                position="absolute"
                bottom="30px"
                left="30px"
                color="light"
                fontFamily="Mulish, sans-serif;"
            >
                {title.toUpperCase()}
            </Heading>
        </Box>
    );
};

export default PhotoCard;
