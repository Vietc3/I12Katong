import { Divider, Box, Heading, } from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../hooks/useColorTheme';
import EventCard from '../cards/EventCard';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
}

const ListEventsCard = ({
    blok
}: Props) => {
    const events = blok.events;
    const colors = useColorTheme();
  
    return (
    <>
        <Divider width="100%" mt="1.6rem" mb=".3rem" mx="auto" />
        <Box  as="section" mt="10px">
            <Heading
             data-aos="fade-down-left"
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
                EVENTS
            </Heading>
            <Box  data-aos="fade-left" d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                {events.map((event: any) => (
                    <Box  key={'listEvent'+event.content+event.id} p = "3" >
                        <EventCard
                            column
                            post={event.content}
                            idEvent={event.id}
                            titleFontSize={'1em'}
                        />
                    </Box>))}
            </Box>
        </Box>
    </>
    )
}

export default ListEventsCard;