import { GetStaticProps } from 'next';
import Storyblok from "../../lib/storyblok";
import useStoryblok from "../../lib/storyblok-hook";
import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
import Image from '../../components/Image';
import styles from '../../constants/styles';
import useColorTheme from '../../hooks/useColorTheme';
import AuthorCard from '../../components/cards/AuthorCard';
import SocialCard from '../../components/cards/SocialCard';
import ArtCard from '../../components/cards/ArtCard';
import NewsletterForm from '../../components/NewsletterForm';
import React, { useMemo } from 'react';
import _ from 'lodash';

type Props = {
    errors?: string;
    storyProp?: any;
    storyAllProp?: any;
};
const EventDetails = ({ storyProp, storyAllProp }: Props) => {

    const storyAll = useStoryblok(storyAllProp);
    // const story = useStoryblok(storyProp);
    const colors = useColorTheme();

    const ListStore = useMemo(() => (<> <Box as="section">
        <Image
            borderRadius={styles.borderRadius}
            objectFit={'cover'}
            src={storyProp.content.desktopImage.filename}
            width={'100%'}
            maxHeight={'500px'}
            minHeight={'360px'}
        />
    </Box>
        <Box d="flex" flexDirection={{ base: 'column', md: 'row' }}>
            <Box as="section" d="flex" flex="3">
                <Box as="article" margin=".5rem">
                    <Heading marginY="1.4rem" color={colors.primary}>
                        {_.upperFirst(storyProp.content.title)}
                    </Heading>
                    <Text>{storyProp?.content.content}</Text>
                </Box>
            </Box>
            <Box as="section" flex="1" flexDirection="column" marginTop={'2rem'}>
                <AuthorCard
                    author={{
                        id: '1',
                        name: `${storyProp.content.author}`,
                        avatar:
                            'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
                    }}
                />
                <SocialCard title="Share The Post" facebook twitter linkedin onClick={() => { }} />
                <NewsletterForm onSubmitForm={() => { }} marginY="10px" />
            </Box>
        </Box>
        <Box as="section">
                    <Heading marginX="1.4rem" marginTop="2rem" fontSize={'1.6rem'} color={colors.default} fontWeight="300">
                        Browse More News
                </Heading>
                    <Box d="flex" flexDirection="column" flex="4" as="section" margin={'.3rem'}>
                        {storyAll?.map((article: any) => {
                            return (
                                <ArtCard column
                                    art={article.content}
                                    idArt={article.id}
                                    key={article.content + article.id}
                                    titleFontSize={'1em'} />
                            );
                        })}
                    </Box>
                </Box></>), [storyProp])

    return (
        <>
            <Container maxW={'6xl'} py={12} pt={5}>
                {ListStore}
            </Container>
        </>
    );
};
export async function getStaticPaths() {
    try {
        let slug = "?filter_query[component][in]=article"
        let params = {
            version: "draft", // or 'published'
            cv: Date.now()
        }
        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
        const paths = data.stories.map((article: any) => {
            return {
                params: {
                    slug: article.id.toString()
                }
            }
        }
        )
        return { paths, fallback: false }

    } catch (err) {
        return { props: { errors: err.message } };
    }

}

export const getStaticProps: GetStaticProps = async (context: any) => {
    try {
        let slug = context.params.slug
        let params = {
            version: "draft", // or 'published'
            cv: Date.now(),
            find_by: "id"
        }

        let slugAllArticles = "?filter_query[component][in]=article"
        let paramsAllArticles = {
            version: "draft", // or 'published'
            cv: Date.now(),
        }
        if (context.preview) {
            params.version = "draft"
            params.cv = Date.now()
        }

        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
        let dataAllArticles = await Storyblok.get(`cdn/stories/${slugAllArticles}`, paramsAllArticles);

        return {
            props: {
                storyProp: data ? data.story : false,
                storyAllProp: dataAllArticles ? dataAllArticles.data.stories : false,
                preview: context.preview || false
            },
            revalidate: 10,
        }

    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default EventDetails;