import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import styles from '../../constants/styles';
import { useRouter } from 'next/router';
import Image from '../Image';
import Card from './Card';
import _ from 'lodash';
import moment from 'moment';


interface Props extends BoxProps {
    art: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
    idArt?: string;
}

type FlexDirection = 'row' | 'column' | undefined;

const ArtsCard = ({
    art,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    idArt,
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();    
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const publicDate = moment(art.publicDate).format("MMM Do");
    
    const router = useRouter();
    const onClickEvent = () => {
        router.push(`/articles/${idArt}`);
    };
    return (
        <Card
            onClick={() => onClickEvent()}
            p={4}
            justifyContent="flex-start"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.02 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            marginY=".5rem"
            display="flex"
            {...props}
            flexDirection={flexDirection}
            color={colors.primary}
        >
            <Box>
                <Image
                    width={{ base: '100%', lg: column ? '100%' : 60 }}
                    height={{ base: 80, lg: column ? '15rem' : 40 }}
                    src={art.desktopImage.filename}
                    alt={'Photo of ' + art.title}
                    objectFit="cover"
                    borderRadius={styles.borderRadius}
                />
            </Box>
            <Box mt={{ base: 4, md: 2 }} ml={{ md: 6 }} color={colors.primary}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                >
               {art.title.substr(0,30)}
                    {art.title.length > 30 ? '...' : ''}
                </Text>
                <Text mt={2} fontSize="xs" >
                    {`${publicDate}-${art.author}`}
                </Text>
                {/* <Text
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {_.upperFirst(post.sumary)}
                </Text> */}

            </Box>
        </Card>
    );
};

export default ArtsCard;
