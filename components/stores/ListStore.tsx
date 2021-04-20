import { Select, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from 'react';

import StoreCard from '../cards/StoreCard';
import { Post } from '../../interfaces';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
    onClickPost: (post: Post) => void;
}

const ListStore = ({
    blok,

    onClickPost
}: Props) => {
    const stores = blok.stores;
    return (<>
        <Box as="section" mt="10px">
            <Heading
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                color="black">
                Store
            </Heading>

            <Box pt={5} w={{ base: '100%', lg: '30%' }}>
                <Select placeholder="All Catelogries" size="lg" />
            </Box>

            <SimpleGrid columns={[1, null, 4]} spacing="40px" >
                {stores.map((store: any, index: number) => (
                    <Box p="3" key={index} >
                        <StoreCard
                            column
                            post={store.content}
                            key={store.content}
                            titleFontSize={'1em'}
                            onClick={() => onClickPost(store.content)} />
                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    </>
    )
}

export default ListStore;