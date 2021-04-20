import { Divider, Box, Heading, } from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../hooks/useColorTheme';
import PostCard from '../cards/PostCard';
import { Post } from '../../interfaces';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
    onClickPost: (post: Post) => void;
}

const ListEventsCard = ({
    blok,

    onClickPost
}: Props) => {
    const events = blok.events;
    const colors = useColorTheme();
    return (<>
        <Divider width="100%" mt="1.6rem" mb=".3rem" mx="auto" />

        <Box as="section" mt="10px">
            <Heading
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}>
                EVENTS
            </Heading>
            <Box d="flex" flexDirection={{ base: 'column', lg: 'row' }}>

                <Box p="3">
                    <PostCard
                        column
                        post={events[0].content}
                        key={events[0].content}
                        titleFontSize={'1em'}
                        onClick={() => onClickPost(events[0].content)} />
                </Box>


                <Box p="3">
                    <PostCard
                        column
                        post={events[1].content}
                        key={events[1].content}
                        titleFontSize={'1em'}
                        onClick={() => onClickPost(events[1].content)} />
                </Box>
                <Box p="3">
                    <PostCard
                        column
                        post={events[2].content}
                        key={events[2].content}
                        titleFontSize={'1em'}
                        onClick={() => onClickPost(events[2].content)} />
                </Box>

                <Box p="3">
                    <PostCard
                        column
                        post={events[3].content}
                        key={events[3].content}
                        titleFontSize={'1em'}
                        onClick={() => onClickPost(events[3].content)} />
                </Box>

            </Box>
        </Box>
    </>
    )
}

export default ListEventsCard;