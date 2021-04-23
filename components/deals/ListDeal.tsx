import { Select, Spacer, Box, Heading, SimpleGrid, Center } from "@chakra-ui/react";
import React,{useState,useEffect} from 'react';

import DealCard from '../cards/DealCard';

import useColorTheme from '../../hooks/useColorTheme';
import sortBy from '../../common/functions/sortBy';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
}

const ListDeal = ({
    blok
}: Props) => {

    const deals = blok.deals;
    const colors = useColorTheme();
    const [paramSort, setParamSort] = useState('asc');
    const [listDeals, setlistDeals] = useState(deals);

	const onChangeSort = (event:any) => {
		setParamSort(event.target.value)
	};
    useEffect(() => {
        sortBy(listDeals,'name',paramSort,setlistDeals)
    },[paramSort]);

    
    return (<>
        <Box as="section" mt="10px" p={{ base: '1', lg: '10px' }}>
            <Heading
                transition="ease-in 0.15s"
                fontSize="3xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish"
            >
                DEALS
            </Heading>
            {/* <Box pt={5} pb={5} w={{ base: '100%', lg: '30%' }}>
                <Select color={colors.primary} placeholder="All Catelogries" size="lg" />
            </Box> */}
            <Box color={colors.primary}
                fontFamily="Mulish" fontWeight="bold"
                d="flex" flexDirection={{ base: 'column', lg: 'row' }}
                >
                <Spacer/>
                <Box d="flex" w={{ base: '100%', lg: '30%' }}>
                   
                    <Center pl="10%" h="100%" w="30%" display={{ base: 'none', lg: 'flex' }} textAlign="center">Sort By:</Center>
                    <Select onChange={onChangeSort}  w={{ base: '100%', lg: '70%' }} color={colors.primary} size="lg" >
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </Select>
                </Box>
            </Box>
            <SimpleGrid pt={3} columns={[1, null, 4]} spacing="20px" >
                {listDeals.map((deal: any, index: number) => (
                    <Box key={index} >
                        <DealCard
                            column
                            deal={deal.content}
                            key={deal.content}
                            titleFontSize={'1em'}
                            idDeal={deal.id}
                        />
                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    </>
    )
}

export default ListDeal;