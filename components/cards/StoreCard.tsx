import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue, Tag, TagLabel, HStack } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';

import { useRouter } from 'next/router';
import Image from '../Image';
import Card from './Card';
import _ from 'lodash';

interface Props extends BoxProps {
    post: any;
    column?: boolean;
    height?: number | string;
    idStore?: string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
}

type FlexDirection = 'row' | 'column' | undefined;

const StoreCard = ({
    post,
    idStore,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    ...props
}: Props) => {

    const [hover, setHover] = useState(false);
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const tags = post.tags;
    const router = useRouter();
    
    const onClickStore = () => {
        router.push(`/stores/${idStore}`);
        window.scrollTo(0, 0);
    };

    return (
        <Card
            p={{base:4, md:1}}
            justifyContent="flex-start"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.01 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            marginY=".5rem"
            display="flex"
            {...props}
            flexDirection={flexDirection}
            onClick={()=>onClickStore()}
            borderRadius={0}
            border={0}
        >
            <Box>
                <Image
                    width={{ base: '100%', lg: column ? '100%' : 60 }}
                    height={{ base: 80, lg: column ? '15rem' : 40 }}
                    src={post.desktopImage.filename}
                    alt={'Photo of ' + post.title}
                    objectFit="cover"
                    // borderRadius={styles.borderRadius}
                />
            </Box>
            <Box mt={{ base: 4, md: 2 }} ml={{ md: 6 }}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color={colors.primary}
                >
                    {post.title}
                </Text>

                <Text fontSize="xs"  color={colors.primary}>
                    Unit No: {post.unitNo}
                </Text>
                <HStack spacing="5px">
                    {tags ? tags.map((tag: any) => (
                        <Tag
                            key={tag}
                            variant="solid"
                            colorScheme="green"
                        >
                            <TagLabel>{tag}</TagLabel>
                        </Tag>
                    )) : null}
                </HStack>
            </Box>
        </Card>
    );
};

export default StoreCard;