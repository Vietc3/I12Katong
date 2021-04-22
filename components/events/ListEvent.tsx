import { Select, Spacer, Flex, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from 'react';

import PostCard from '../cards/PostCard';

import useColorTheme from '../../hooks/useColorTheme';

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

    return (<>
        <Box as="section" mt="10px" p={10}>
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
            <Flex  color={colors.primary}
                fontFamily="Mulish" fontWeight="bold">
                <Box>
                    Filter: LifeStyle
                </Box>
                <Spacer />
                <Box >
                    Sort by: A-Z
                </Box>
            </Flex>
            <SimpleGrid pt={3} columns={[1, null, 4]} spacing="20px" >
                {events.map((event: any, index: number) => (
                    <Box key={index} >
                        <PostCard
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