import { Select, Spacer, Flex, Box, Heading, SimpleGrid, Center } from "@chakra-ui/react";
import React,{useState,useEffect} from 'react';

import EventCard from '../cards/EventCard';

import useColorTheme from '../../hooks/useColorTheme';
import sortBy from '../../common/functions/sortBy';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
}

const ListEvent = ({
    blok
}: Props) => {

    const events = blok.events;
    const colors = useColorTheme();
    const [paramSort, setParamSort] = useState('asc');
    const [listEvents, setlistEvents] = useState(events);

	const onChangeSort = (event:any) => {
		setParamSort(event.target.value)
	};
    useEffect(() => {
        sortBy(listEvents,'name',paramSort,setlistEvents)
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
                EVENTS
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
                {listEvents.map((event: any, index: number) => (
                    <Box key={index} >
                        <EventCard
                            column
                            post={event.content}
                            key={event.content}
                            titleFontSize={'1em'}
                            idEvent={event.id}
                        />
                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    </>
    )
}

export default ListEvent;