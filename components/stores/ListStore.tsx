import { Flex, Box, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import React from 'react';

import StoreCard from '../cards/StoreCard';
import useColorTheme from '../../hooks/useColorTheme';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
}

const ListStore = ({
    blok
}: Props) => {
    const stores = blok.stores;
    const colors = useColorTheme();
    return (<>
        <Box as="section" p={{ base: '00px', md: '20px' }} mt="10px">
            <Heading
                transition="ease-in 0.15s"
                fontSize="3xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish"
            >
                STORES
            </Heading>
            {/* 
            <Box pt={5} w={{ base: '100%', lg: '30%' }}>
                <Select  color={colors.primary} placeholder="All Catelogries" size="lg" />
            </Box> */}

            <Flex color={colors.primary}
                fontFamily="Mulish" fontWeight="bold">
                <Box>
                    Filter: LifeStyle
                </Box>
                <Spacer />
                <Box >
                    Sort by: A-Z
                </Box>
            </Flex>
            <SimpleGrid pt={5} columns={[1, null, 4]} spacing="20px" >
                {stores.map((store: any, index: number) => (
                    <Box p="3" key={index} >
                        <StoreCard
                            column
                            post={store.content}
                            idStore={store.id}
                            key={store.content}
                            titleFontSize={'1em'}
                        />
                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    </>
    )
}

export default ListStore;