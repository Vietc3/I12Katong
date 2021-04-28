import { Divider, Box, Heading, } from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../hooks/useColorTheme';
import ArtsCard from '../cards/ArtCard';

type Props = {
    blok: any;
    margin?: number;
    containerHeight?: number;
}

const ListArtsCard = ({
    blok
}: Props) => {
    const articles = blok.articles;
    const colors = useColorTheme();

    return (
    <>
        <Divider width="100%" mt="1.6rem" mb=".3rem" mx="auto" />
        <Box  as="section" mt="10px">
            <Heading
            data-aos="fade-left"
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
                ARTICLES
            </Heading>
            <Box data-aos="zoom-in" d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                {articles.map((article: any) => (
                    <Box w={{base:"100%", lg:"25%"}} p = "3" key={article.content+article.id}>
                        <ArtsCard
                            column
                            art={article.content}
                            idArt={article.id}
                            key={article.content+article.id}
                            titleFontSize={'1em'}
                        />
                    </Box>))}
            </Box>
        </Box>
    </>
    )
}

export default ListArtsCard;