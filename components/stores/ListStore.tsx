import {Center, Select, Box, Heading, SimpleGrid, Spacer,Divider } from "@chakra-ui/react";
import React, { useEffect, useState,useMemo } from 'react';

import StoreCard from '../cards/StoreCard'; 
import FilterFirstCharacter from '../filter/filterFirstCharacter'; 
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
    const colors = useColorTheme();
    const [paramSort, setParamSort] = useState('asc');
    const [listStores, setlistStores] = useState(blok.stores);
    const [fristChar, setFristChar] = useState('');
    const [categories, setCategories] = useState('');


    const onChangeSort = (event: any) => {
        setParamSort(event.target.value)
        localStorage.setItem("sortStore",event.target.value);
    };   
    
    const onChangeCategories = (event: any) => {
        setCategories(event.target.value)
    };    

    useEffect(() => {
        sortBy(blok.stores, 'content.title', paramSort, setlistStores)
    }, [paramSort]);

    useEffect(() => {
        const stores = blok.stores.filter((store:any)=>store.content.title[0].toUpperCase() === fristChar )
        setlistStores(stores)
    }, [fristChar]);

    useEffect(() => {
        if(categories !=="all"){
            const stores = blok.stores.filter((store:any)=>store.content.categories.toLowerCase() === categories )
            setlistStores(stores)
        }
        else {setlistStores(blok.stores)}

    }, [categories]);


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
                pt={10}
                d="flex" flexDirection={{ base: 'column', lg: 'row' }}
            >
                  <Box pr="2%" d="flex" w={{ base: '100%', lg: '20%' }}>
                     
                <Center  h="100%" w="30%" display={{ base: 'none', lg: 'flex' }} textAlign="center">Categories</Center>
                <Select onChange={onChangeCategories} w={{ base: '100%', lg: '70%' }} color={colors.primary} size="lg" >
                    <option value="all">All</option>
                    <option value="food">Foot</option>
                    <option value="sport">Sport</option>
                    <option value="fashion">Fashion</option>
                    <option value="technology">Tech</option>
                </Select>
            </Box>
            </Box>
           
            <Box color={colors.primary}
                fontFamily="Mulish" fontWeight="bold"
                pt={10}
                d="flex" flexDirection={{ base: 'column', lg: 'row' }}
            >
                 <Box pr="2%" d="flex" w={{ base: '100%', lg: '20%' }}>
                
                <Center  h="100%" w="30%" display={{ base: 'none', lg: 'flex' }} textAlign="center">Sort By</Center>

                <Select onChange={onChangeSort} w={{ base: '100%', lg: '70%' }} color={colors.primary} size="lg" >
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </Select>

            </Box>
            {/* <Spacer /> */}
                <Box  d="flex" w={{ base: '90%', lg: '65%' }} pt={6} h="24px">
                <FilterFirstCharacter handleFristChar={(value:any)=>setFristChar(value)}/></Box>
            </Box>
            <Divider width="100%" mt="1.6rem" mb=".3rem" mx="auto" />
            <SimpleGrid pt={5} columns={[1, null, 4]} spacing="20px" >
               {listStores.toString() !== '' ?ListStore :   <Heading
                transition="ease-in 0.15s"
                fontSize="3xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish"
            >
                NO STORE
            </Heading>}
            </SimpleGrid>
        </Box>
    </>
    )
}

export default ListStore;