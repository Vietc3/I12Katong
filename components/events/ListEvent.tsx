import { Select , Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from 'react';

import PostCard from '../cards/PostCard';
import { Post } from '../../interfaces';
import useColorTheme from '../../hooks/useColorTheme';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
    onClickPost: (post: Post) => void;
}

const ListEvent = ({
    blok,

    onClickPost
}: Props) => {
    const events = blok.events;
    const colors = useColorTheme();
    return (<>
        <Box as="section" mt="10px" p={10}>
            <Heading
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                color={colors.primary}>
               Event
            </Heading>
            <Box pt={5} pb={5} w={{ base: '100%', lg: '30%' }}>
                <Select color={colors.primary} placeholder="All Catelogries" size="lg" />
            </Box>
            <SimpleGrid columns={[1, null, 4]} spacing="20px" >
                {events.map((event: any, index: number) => (
                    <Box key={index} >
                        <PostCard
                            column
                            post={event.content}
                            key={event.content}
                            titleFontSize={'1em'}
                            onClick={() => onClickPost(event.content)} />
                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    </>
    )
}

export default ListEvent;