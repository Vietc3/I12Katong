import {Center, Select, Box, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState,useMemo } from 'react';

import StoreCard from '../cards/StoreCard';
import useColorTheme from '../../hooks/useColorTheme';
import sortBy from '../../common/functions/sortBy';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
}

const ListStore = ({
    blok
}: Props) => {

    // const stores = blok.stores;
    
    const colors = useColorTheme();
    const [paramSort, setParamSort] = useState('asc');
    const [listStores, setlistStores] = useState(blok.stores);

    const onChangeSort = (event: any) => {
        setParamSort(event.target.value)
        localStorage.setItem("sortStore",event.target.value);
    };    

    useEffect(() => {
        sortBy(listStores, 'content.title', paramSort, setlistStores)
    }, [paramSort]);

    const ListStore = useMemo(()=>listStores.map((store: any, index: number) => (
        <Box p="3" key={index} >
            <StoreCard
                column
                post={store.content}
                idStore={store.id}
                key={store.content}
                titleFontSize={'1em'}
            />
        </Box>
    )),[listStores])

    return (<>
        <Box as="section" p={{ base: '1', lg: '10px' }} mt="10px">
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
            <Box color={colors.primary}
                fontFamily="Mulish" fontWeight="bold"
                d="flex" flexDirection={{ base: 'column', lg: 'row' }}
            >
                <Spacer />
                <Box d="flex" w={{ base: '100%', lg: '30%' }}>
                    <Center pl="10%" h="100%" w="30%" display={{ base: 'none', lg: 'flex' }} textAlign="center">Sort By:</Center>
                    <Select onChange={onChangeSort} w={{ base: '100%', lg: '70%' }} color={colors.primary} size="lg" >
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </Select>
                </Box>
            </Box>
            <SimpleGrid pt={5} columns={[1, null, 4]} spacing="20px" >
               {ListStore}
            </SimpleGrid>
        </Box>
    </>
    )
}

export default ListStore;